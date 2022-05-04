import _ from '@/modules'

/**
 * @description: 回收卡牌的动画
 * @param {number} num 要回收的张数
 * @return {Promise<void>}
 */
const recoverTransition = (num) => {
  const { data } = _

  return new Promise((resolve, reject) => {
    // 通过增加
    let timer = setInterval(() => {
      data.recover++
      if (data.recover >= num) {
        clearInterval(timer)
        setTimeout(() => {
          resolve()
        }, 500)
      }
    }, 50)
  })
}

export default recoverTransition
