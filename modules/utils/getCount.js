/**
 * @description: 接受一个卡牌字符串 返回它对应的攻击力
 * @param {string} card 卡牌字符串 如 'a1'
 * @return {number}
 */
const getCount = (card) => {
  let atk = parseInt(card.slice(1))
  if (atk == 11) return 10
  else if (atk == 12) return 15
  else if (atk == 13) return 20
  else return atk
}

export default getCount
