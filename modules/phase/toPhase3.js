import _ from '@/modules'

const toPhase3 = async (sum) => {
  const { data, fight, getCount, transition, win, toPhase4 } = _
  data.phase = 3
  // 处理选择区
  let HP = data.bossHP - sum
  fight(data.bossHP - sum, 'bossHP')
  await transition('select')
  data.discardList.push(...data.selectedSet)
  data.selectedSet.clear()
  data.style.selects = {}
  data.style.select = {}
  if (HP > 0) {
    toPhase4()
  } else {
    // 结算boss
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
