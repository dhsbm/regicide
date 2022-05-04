import _ from '@/modules'

/**
 * @description: 修改游戏设置
 * @param {string} prop 要修改的属性
 * @return {void}
 */
const changeSetting = (prop) => {
  const { setting, showTip } = _
  if (prop == 'life') {
    setting.infiniteLife = !setting.infiniteLife
    showTip(`无限生命功能已${setting.infiniteLife ? '开启' : '关闭'}`, 'none')
  } else if (prop == 'sort') {
    setting.sort = !setting.sort
    if (setting.sort) {
      showTip('你将依次面对 J Q K', 'none')
    } else {
      showTip('你将面对随机的敌人', 'none')
    }
  } else if (prop == 'honor') {
    setting.honor = !setting.honor
    showTip(`荣誉击杀功能已${setting.honor ? '开启' : '关闭'}`, 'none')
  }
}

export default changeSetting
