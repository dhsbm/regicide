/**
 * @description: 传入一个数组，返回一个打乱的新数组 洗牌功能
 * @param {Array} arr 要打乱的数组
 * @return {Array} 打乱后的新数组
 */
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
