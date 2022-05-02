import _ from '@/modules'

/**
 * @description: 阶段2 阶段卡牌效果
 * @return {Promise<void>}
 */
const toPhase2 = async () => {
  const { data, fight, shuffle, transition, drawCard, toPhase3, getCount } = _

  data.phase = 2
  // 黑红梅方 4花色
  let effect = [0, 0, 0, 0]
  let sum = 0
  // 遍历出的牌
  for (let card of data.selectedSet) {
    sum += getCount(card)
    effect[card.charCodeAt(0) - 97] = 1
    data.handSet.delete(card)
  }
  // 清除boss的效果
  effect[data.boss.charCodeAt(0) - 97] = 0

  // 梅花，伤害翻倍
  if (effect[2] == 1) sum *= 2
  // 黑桃，降低boss攻击力
  if (effect[0] == 1) fight(Math.max(0, data.bossATK - sum), 'bossATK')
  // 红桃，回收卡牌
  if (effect[1] == 1) {
    shuffle(data.discardList)
    await transition('discard', sum)
    data.remainList.splice(0, 0, ...data.discardList.splice(0, sum))
    data.style.discard = 0
  }
  // 方片抽牌
  if (effect[3] == 1) drawCard(sum)

  // 进入阶段3
  setTimeout(() => toPhase3(sum), 1000)
}

export default toPhase2
