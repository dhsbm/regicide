import _ from '@/modules'

const test = (cards) => {
  const { getCount } = _

  if (cards.length == 0) return false
  if (cards.length == 1) return true

  const num1 = getCount(cards[0]),
    num2 = getCount(cards[1])

  if (cards.length == 2) {
    const max = Math.max(num1, num2),
      min = Math.min(num1, num2)
    if (min !== max) {
      return min == 1
    } else {
      return min > 1 && min < 6
    }
  } else {
    if (num1 === 1 || num1 * cards.length > 10) return false
    for (let i = 1; i < cards.length; i++) {
      if (getCount(cards[i]) !== num1) return false
    }
    return true
  }
}

// 出牌
const playCard = () => {
  const { data, showTip, toPhase2 } = _
  const sign = test([...data.selectedSet])
  if (sign) toPhase2()
  else {
    data.selectedSet.clear()
    showTip('出牌不符合规则')
  }
}

export default playCard
