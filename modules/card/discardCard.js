import _ from '@/modules'

// 弃牌
const discardCard = () => {
  const { data, showTip, getCount } = _
  let sum = 0
  for (let card of data.selectedSet) {
    sum += getCount(card)
  }
  if (sum < data.bossATK) {
    showTip('弃牌不可小于boss攻击力', 'none')
  } else {
    for (let card of data.selectedSet) {
      data.handSet.delete(card)
    }
    data.discardList.push(...data.selectedSet)
    data.selectedSet.clear()
    data.phase = 1
  }
}

export default discardCard
