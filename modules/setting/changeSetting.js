import _ from '@/modules'

/**
 * @description: 修改游戏设置
 * @param {string} prop 要修改的属性
 * @return {void}
 */
const changeSetting = (prop) => {
  const { setting } = _
  if (prop == 'life') {
    setting.infiniteLife = !setting.infiniteLife
  } else if (prop == 'sort') {
    setting.sort = !setting.sort
  } else if (prop == 'regress') {
    setting.regress = !setting.regress
  }
}

export default changeSetting
