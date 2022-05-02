import _ from '@/modules'

const win = () => {
  const { data, init } = _
  let str = ''
  if (data.rest === 2) str = '恭喜你获得弑君金牌'
  else if (data.rest == 1) str = '恭喜你获得弑君银牌'
  else if (data.rest == 0) str = '恭喜你获得弑君铜牌'
  uni.showModal({
    title: '你赢了',
    content: str,
    confirmText: '再来一次',
    showCancel: false,
    success: (res) => {
      init()
    },
  })
}

export default win
