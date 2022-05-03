import _ from '@/modules'
import { nextTick } from 'vue'

/**
 * @description: 放弃这条命 翻面joker 重新抽牌
 * @param {string} joker 被翻面的joker
 * @return {Promise<void>}
 */
const abandon = async (joker) => {
  const { data, recoverTransition, drawCard, shuffle } = _
  if (!data.allow || data[joker] == 0) return
  data.allow = false
  data[joker] = 0
  data.showJokerTip = false
  await recoverTransition(data.discardList.length)
  data.remainList.push(...data.discardList, ...data.handSet)
  data.remainList = shuffle(data.remainList)
  data.selectedSet.clear()
  data.handSet.clear()
  data.discardList = []
  data.phase = 1
  nextTick(() => {
    drawCard(8)
    data.allow = true
  })
}

export default abandon
