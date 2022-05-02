import _ from '@/modules'

// 显示提示
const showTip = (title, icon = 'error') => {
  uni.showToast({
    title,
    icon,
    duration: 2000,
    success: (res) => {
      _.data.selectedSet.clear()
    },
  })
}

export default showTip
