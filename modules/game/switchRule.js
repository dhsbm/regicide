import _ from '@/modules'

const switchRule = () => {
  const { data } = _
  data.ruleIndex = (data.ruleIndex + 1) % 3
  data.showRuleTip = false
}

export default switchRule
