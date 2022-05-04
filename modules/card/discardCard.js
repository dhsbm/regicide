import _ from '@/modules'

/**
 * @description: 弃掉选择的牌
 * @return {void}
 */
const discardCard = () => {
  const { data, showTip, getCount, toPhase1 } = _
  let sum = 0
  // 计算弃牌点数总和
  for (let card of data.selectedSet) {
    sum += getCount(card)
  }
  if (sum < data.bossATK) {
    // 总和小于boss攻击力 显示提示
    showTip('弃牌不可小于boss攻击力')
    data.selectedSet.clear()
  } else {
    // 弃牌
    for (let card of data.selectedSet) {
      data.handSet.delete(card)
    }
    data.discardList.push(...data.selectedSet)
    data.selectedSet.clear()
    // 进入阶段1
    toPhase1()
  }
}

export default discardCard
