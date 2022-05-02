import _ from '@/modules'

/**
 * @description: 切换规则栏目
 * @return {void}
 */
const switchRule = () => {
  const { data } = _
  data.ruleIndex = (data.ruleIndex + 1) % 3
  data.showRuleTip = false
}

export default switchRule
