// 打乱一个数组  洗牌
const shuffle = (arr) => {
  const newArr = [...arr]
  const len = newArr.length
  for (let i = 0; i < len; i++) {
    const randomIndex = (Math.random() * len) | 0
    const temp = newArr[i]
    newArr[i] = newArr[randomIndex]
    newArr[randomIndex] = temp
  }
  return newArr
}

export default shuffle
