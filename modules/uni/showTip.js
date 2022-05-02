import _ from '@/modules'

/**
 * @description: 显示提示
 * @param {string} title 要显示提示
 * @param {string} icon 要显示的图标，默认为 error
 * @return {void}
 */
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
