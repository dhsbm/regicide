import _ from '@/modules'

/**
 * @description: boss被击败时的动画
 * @param {boolean} sign 是否为荣誉击杀
 * @return {Promise<void>}
 */
const bossTransition = (sign) => {
  const { data } = _
  return new Promise((resolve, reject) => {
    let style = {
      height: '84px',
      width: '60px',
    }
    if (sign) {
      // 荣誉击杀 放入牌堆
      const len = data.discardList.length
      let j = len / 2 / (Math.floor(len / 10) + 1)
      style.top = 60 + j + 'px'
      style.left = 50 + j + 'px'
    } else {
      // 正常击杀 放入墓地
      const len = data.remainList.length
      let j = len / 2 / (Math.floor(len / 10) + 1)
      style.top = 170 + j + 'px'
      style.left = 50 + j + 'px'
    }
    data.style.boss = style
    // 为下一位boss出场作准备
    setTimeout(() => {
      if (sign) data.remainList.push(data.boss)
      else data.discardList.push(data.boss)
      data.style.boss = {
        transition: 'none',
        top: '-200px',
      }
    }, 500)
    // 动画执行完毕
    setTimeout(() => {
      data.style.boss = {
        top: '-200px',
      }
      resolve()
    }, 1000)
  })
}

export default bossTransition
