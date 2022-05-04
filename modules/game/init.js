import _ from '@/modules'
import { nextTick } from 'vue'

/**
 * @description: 初始化牌堆敌人
 * @return {void}
 */
const init = () => {
  const { data, setting, shuffle, drawCard } = _
  // 初始化牌堆
  let cards = new Array(40).fill(0).map((value, index) => {
    let i = (index / 10) | 0
    if (i == 0) return 'a' + ((index % 10) + 1)
    else if (i == 1) return 'b' + ((index % 10) + 1)
    else if (i == 2) return 'c' + ((index % 10) + 1)
    else if (i == 3) return 'd' + ((index % 10) + 1)
  })
  // 初始化boss列表
  const boss1 = ['a11', 'b11', 'c11', 'd11']
  const boss2 = ['a12', 'b12', 'c12', 'd12']
  const boss3 = ['a13', 'b13', 'c13', 'd13']
  let bossList
  if (setting.sort) {
    bossList = [...shuffle(boss1), ...shuffle(boss2), ...shuffle(boss3)]
  } else {
    bossList = shuffle([...boss1, ...boss2, ...boss3])
  }

  data.bossList = bossList
  data.joker1 = data.joker2 = 1
  data.remainList = shuffle(cards)
  data.discardList = []
  data.handSet.clear()
  data.selectedSet.clear()
  data.boss = data.bossList.shift()
  // 抽牌，开始游戏
  nextTick(() => {
    data.phase = 1
    drawCard(10)
  })
}

export default init
