import _ from '@/modules'

const toPhase4 = () => {
  const { data, getCount } = _
  data.phase = 4
  if (data.rest == 0) {
    let sum = 0
    for (let card of data.handSet) {
      sum += getCount(card)
    }
  }
}

export default toPhase4
