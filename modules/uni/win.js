import _ from '@/modules'

/**
 * @description: 游戏胜利
 * @return {void}
 */
const win = () => {
  const { init } = _
  uni.showModal({
    title: '你赢了',
    content: '恭喜你获得胜利',
    confirmText: '再来一次',
    showCancel: false,
    success: (res) => {
      init()
    },
  })
}

export default win
