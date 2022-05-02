import _ from '@/modules'

/**
 * @description: 阶段3 结算伤害
 * @param {number} sum 本轮造成的伤害
 * @return {Promise<void>}
 */
const toPhase3 = async (sum) => {
  const { data, fight, getCount, transition, win, toPhase4 } = _
  data.phase = 3
  // 处理选择区
  let HP = data.bossHP - sum
  // 逐步减少boss hp
  fight(data.bossHP - sum, 'bossHP')
  // 等待出牌区动画
  await transition('select')
  data.discardList.push(...data.selectedSet)
  data.selectedSet.clear()
  // 清除样式
  data.style.selects = {}
  data.style.select = {}
  if (HP > 0) {
    // boss存活 进入阶段4
    toPhase4()
  } else {
    // 播放boss被击败动画
    await transition('boss', HP == 0)
    if (data.bossList.length == 0) {
      win()
      return
    }
    data.boss = data.bossList.shift()
    data.bossATK = getCount(data.boss)
    data.bossHP = 2 * data.bossATK
    data.phase = 1
    data.style.boss = {}
  }
}

export default toPhase3
