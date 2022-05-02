import _ from '@/modules'

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
