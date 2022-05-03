import _ from '@/modules'

/**
 * @description: 出牌时的动画
 * @return {Promise<void>}
 */
const palyTransition = () => {
  const { data } = _
  return new Promise((resolve, reject) => {
    // 向上移动 模拟攻击
    data.style.playContainer = {
      top: '170px',
    }
    // 攻击完毕恢复
    setTimeout(() => {
      data.style.playContainer = {
        top: '190px',
      }
    }, 500)
    // 卡牌移入弃牌堆
    setTimeout(() => {
      const len = data.discardList.length
      let j = len / 2 / (Math.floor(len / 10) + 1)
      data.style.playContainer = {
        left: 50 + j + 'px',
        top: 170 + j + 'px',
        width: '0',
      }
      data.style.playCard = {
        position: 'absolute',
        left: '0',
        height: '84px',
        width: '60px',
      }
    }, 1000)
    // 动画执行完毕
    setTimeout(() => {
      resolve()
    }, 1500)
  })
}

export default palyTransition
