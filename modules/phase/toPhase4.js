import _ from '@/modules'

/**
 * @description: 阶段4 等待弃牌
 * @param {*}
 * @return {*}
 */
const toPhase4 = () => {
  const { data, getCount } = _
  data.phase = 4
  if (data.rest == 0) {
    let sum = 0
    for (let card of data.handSet) {
      sum += getCount(card)
    }
  }
  if (sum < data.bossATK) {
    // 无法抵挡boss攻击，展示joker规则提示
    data.showJokerTip = true
  }
}

export default toPhase4
