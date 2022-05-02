import _ from '@/modules'

// 选牌
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
