import _ from '@/modules'

/**
 * @description: 利用定时器实现数字逐步变化的效果
 * @param {number} target 要变化到的目标值
 * @param {string} property 要变化的属性
 * @return {void}
 */
const fight = (target, property) => {
  const { data } = _
  let sign = target > data[property] ? 1 : -1
  let step = ((target - data[property]) / 10) | 0
  if (step == 0) step = sign
  let timer = setInterval(() => {
    data[property] += step
    if (sign * data[property] >= sign * target) {
      clearInterval(timer)
      data[property] = target
    }
  }, 40)
}

export default fight
