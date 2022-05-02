// 接受一个卡牌字符串 返回它的攻击力
const getCount = (card) => {
  let atk = card.slice(1) - 0
  if (atk == 11) return 10
  else if (atk == 12) return 15
  else if (atk == 13) return 20
  else return atk
}

export default getCount