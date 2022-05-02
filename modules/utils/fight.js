import _ from '@/modules'

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
