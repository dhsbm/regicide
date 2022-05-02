import _ from '@/modules'

/**
 * @description: 阶段1 等待出牌
 * @return {void}
 */
const toPhase1 = () => {
  const { data } = _
  data.phase = 1
  if (data.handSet.size == 0) {
    // 无法继续出牌，显示joker规则提示
    data.showJokerTip = true
  }
}

export default toPhase1
