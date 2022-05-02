import _ from '@/modules'
import { nextTick } from 'vue'

const init = () => {
  const { data, shuffle, drawCard } = _
  let cards = new Array(40).fill(0).map((value, index) => {
    let i = (index / 10) | 0
    if (i == 0) return 'a' + ((index % 10) + 1)
    else if (i == 1) return 'b' + ((index % 10) + 1)
    else if (i == 2) return 'c' + ((index % 10) + 1)
    else if (i == 3) return 'd' + ((index % 10) + 1)
  })
  let bosses = [
    ...shuffle(['a11', 'b11', 'c11', 'd11']),
    ...shuffle(['a12', 'b12', 'c12', 'd12']),
    ...shuffle(['a13', 'b13', 'c13', 'd13']),
  ]
  data.bossList = bosses
  data.joker1 = data.joker2 = 1
  data.remainList = shuffle(cards)
  data.discardList = []
  data.handSet.clear()
  data.selectedSet.clear()
  data.boss = data.bossList.shift()
  nextTick(() => {
    data.phase = 1
    data.allow = true
    drawCard(8)
  })
}

export default init
