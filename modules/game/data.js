import { reactive, computed, watch } from 'vue'

const rules = [
  ['回合流程', '阶段1: 打出卡牌', '阶段2: 结算效果', '阶段3: 造成伤害', '阶段4: 抵御敌人'],
  ['卡牌效果', '黑桃: 降低攻击', '红桃: 回收卡牌', '梅花: 伤害翻倍', '方片: 抽取卡牌'],
  ['敌人属性', '杰克: 10ATK / 20HP', '皇后: 15ATK / 30HP', '国王: 20ATK / 40HP'],
]

const data = reactive({
  bossList: [], // 剩余boss
  remainList: [], // 剩余牌堆
  discardList: [], // 弃牌堆
  handSet: new Set(), // 手上的牌
  selectedSet: new Set(), // 选择的牌
  boss: '', // 当前boss
  bossATK: 10, // boss攻击力
  bossHP: 20, // boss生命
  phase: 0, // 阶段
  joker1: 1, // 大小王
  joker2: 1,
  allow: false, // 是否可操作
  ruleIndex: 0,
  showRuleTip: true,
  showJokerTip: computed(() => data.handSet.size == 0),
  style: {
    // 样式
    select: {},
    selects: {},
    boss: {},
    discard: 0, // 弃牌堆数目
    joker1: computed(() => {
      if (data.joker1 == 1) {
        return {}
      } else {
        return { transform: 'rotateY(-180deg)' }
      }
    }),
    joker2: computed(() => {
      if (data.joker2 == 1) {
        return {}
      } else {
        return { transform: 'rotateY(-180deg)' }
      }
    }),
    back1: computed(() => {
      if (data.joker1 == 0) {
        return { transform: 'rotateY(0)' }
      } else {
        return {}
      }
    }),
    back2: computed(() => {
      if (data.joker2 == 0) {
        return { transform: 'rotateY(0)' }
      } else {
        return {}
      }
    }),
  },
  remainListStyle: computed(() => {
    const len = data.remainList.length
    const styleList = []
    const d = Math.floor(len / 10) + 1
    for (let i = 0; i < len; i++) {
      const j = (i - len / 2) / d
      styleList.push({
        transform: `translate(${j}px,${j}px)`,
      })
    }
    return styleList
  }),
  discardListStyle: computed(() => {
    const len = data.discardList.length
    const styleList = []
    const d = Math.floor(len / 10) + 1
    for (let i = 0; i < len; i++) {
      const style = {}
      const j = (i - len / 2) / d
      const value = data.discardList[i]
      style.backgroundImage = `url(../../static/${value}.png)`
      style.transform = `translate(${j}px,${j}px)`
      if (i < data.style.discard) style.top = '-110px'
      styleList.push(style)
    }
    return styleList
  }),
  handListStyle: computed(() => {
    const styleList = []
    for (const card of data.handSet) {
      const style = {}
      style.backgroundImage = `url(../../static/${card}.png)`
      if (data.selectedSet.has(card)) {
        style.marginTop = '-10px'
        style.outline = '2px solid red'
      }
      styleList.push(style)
    }
    return styleList
  }),
  selectedListStyle: computed(() => {
    const styleList = []
    for (const card of data.selectedSet) {
      const style = {}
      style.backgroundImage = `url(../../static/${card}.png)`
      styleList.push(style)
    }
    return styleList
  }),
  bossStyle: computed(() => {
    return {
      backgroundImage: `url(../../static/${data.boss}.png)`,
    }
  }),
  rule: computed(() => rules[data.ruleIndex]),
  rest: computed(() => data.joker1 + data.joker2),
})

watch(
  () => data.phase,
  (now) => {
    if (now == 2 || now == 3) {
      data.allow = false
    } else {
      data.allow = true
    }
  }
)

export default data
