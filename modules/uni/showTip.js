import _ from '@/modules'

let timer

/**
 * @description: 显示提示
 * @param {string} title 要显示提示
 * @param {string} icon 要显示的图标，默认为 error
 * @return {void}
 */
const showTip = (title, icon = 'error') => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    uni.showToast({
      title,
      icon,
      duration: 1000,
      success: (res) => {
        _.data.selectedSet.clear()
      },
    })
  }, 500)
}

export default showTip
