import _ from '@/modules'

/**
 * @description: 阶段2 结算卡牌效果
 * @return {Promise<void>}
 */
const toPhase2 = async () => {
  const { data, setting, gradualChange, shuffle, recoverTransition, drawCard, toPhase3, getCount } = _

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
  setting.immune && (effect[data.boss.charCodeAt(0) - 97] = 0)

  // 梅花，伤害翻倍
  if (effect[2] == 1) sum *= 2
  // 黑桃，降低boss攻击力
  if (effect[0] == 1) gradualChange('bossATK', Math.max(0, data.bossATK - sum))
  // 红桃，回收卡牌
  if (effect[1] == 1) {
    shuffle(data.discardList)
    await recoverTransition(sum)
    data.remainList.splice(0, 0, ...data.discardList.splice(0, sum))
    data.recover = 0
  }
  // 方片抽牌
  if (effect[3] == 1) drawCard(sum)

  // 进入阶段3
  if (effect[1] == 1) {
    toPhase3(sum)
  } else {
    setTimeout(() => toPhase3(sum), 500)
  }
}

export default toPhase2
