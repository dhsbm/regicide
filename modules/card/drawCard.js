import _ from '@/modules'

// 抽牌
/**
 * @description: 抽count张牌
 * @param {number} count
 * @return {void}
 */
const drawCard = (count) => {
  const { data, setting } = _
  count = Math.min(count, data.remainList.length, setting.upperLimit - data.handSet.size)
  for (let i = 0; i < count; i++) {
    data.handSet.add(data.remainList.pop())
  }
}

export default drawCard
