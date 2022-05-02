import _ from '@/modules'

/**
 * @description: 选择卡牌/取消选择
 * @param {string} card 选择的卡牌
 * @return {void}
 */
const selectCard = (card) => {
  const { data } = _
  if (!data.allow) return
  const selectedSet = data.selectedSet
  if (selectedSet.has(card)) {
    selectedSet.delete(card)
  } else {
    selectedSet.add(card)
  }
}

export default selectCard
