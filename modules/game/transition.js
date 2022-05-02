import _ from '@/modules'
// todos
const transition = (item, sign) => {
  const { data } = _
  return new Promise((reslove, reject) => {
    if (item == 'select') {
      data.style.selects = {
        top: '170px',
      }
      setTimeout(() => {
        data.style.selects = {}
      }, 500)
      setTimeout(() => {
        const len = data.discardList.length
        let j = len / 2 / (Math.floor(len / 10) + 1)
        data.style.selects = {
          left: 50 + j + 'px',
          top: 170 + j + 'px',
          width: '0',
        }
        data.style.select = {
          position: 'absolute',
          left: '0',
          height: '84px',
          width: '60px',
        }
      }, 1000)
      setTimeout(() => {
        reslove()
      }, 2000)
    } else if (item == 'boss') {
      let style = {
        height: '84px',
        width: '60px',
      }
      if (sign) {
        const len = data.discardList.length
        let j = len / 2 / (Math.floor(len / 10) + 1)
        style.top = 60 + j + 'px'
        style.left = 50 + j + 'px'
      } else {
        const len = data.remainList.length
        let j = len / 2 / (Math.floor(len / 10) + 1)
        style.top = 170 + j + 'px'
        style.left = 50 + j + 'px'
      }
      data.style.boss = style
      setTimeout(() => {
        if (sign) data.remainList.push(data.boss)
        else data.discardList.push(data.boss)
        data.style.boss = {
          transition: 'none',
          top: '-200px',
        }
      }, 500)
      setTimeout(() => {
        data.style.boss = {
          top: '-200px',
        }
        reslove()
      }, 1000)
    } else if (item == 'discard') {
      let timer = setInterval(() => {
        data.style.discard++
        if (data.style.discard >= sign) clearInterval(timer)
      }, 50)
      setTimeout(() => {
        reslove()
      }, 1000)
    }
  })
}

export default transition
