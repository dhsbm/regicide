import { reactive, computed, watch } from 'vue'

// 规则栏目列表
const rules = [
  ['回合流程', '阶段1: 打出卡牌', '阶段2: 结算效果', '阶段3: 造成伤害', '阶段4: 抵御敌人'],
  ['卡牌效果', '黑桃: 降低攻击', '红桃: 回收卡牌', '梅花: 伤害翻倍', '方片: 抽取卡牌'],
  ['敌人属性', '杰克: 10ATK / 20HP', '皇后: 15ATK / 30HP', '国王: 20ATK / 40HP'],
]

// 游戏运行数据
const data = reactive({
  bossList: [], // 剩余boss
  remainList: [], // 剩余牌堆
  discardList: [], // 弃牌堆
  handSet: new Set(), // 手上的牌
  selectedSet: new Set(), // 已选择的牌
  boss: '', // 当前boss
  bossATK: 10, // boss攻击力
  bossHP: 20, // boss生命
  phase: 0, // 当前阶段
  joker1: 1, // 大小王
  joker2: 1, // 1表示正面，0表示背面
  allow: false, // 当前是否可操作
  ruleIndex: 0, // 显示第几栏规则
  showRuleTip: true, // 是否显示切换规则提示
  showJokerTip: false, // 显示翻面Joker的规则提示
  recover: 0, // 要回收的卡牌数
  style: {
    // 样式
    playCard: {}, // 出牌区卡牌样式
    playContainer: {
      top: '190px',
    }, // 出牌取容器的样式
    boss: {}, // boss的样式
    // joker的样式
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
    // joker背面的样式
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
  // 牌堆卡牌样式列表 卡牌偏移像素
  remainStyleList: computed(() => {
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
  // 墓地卡牌样式列表 卡牌偏移像素与图片地址
  discardStyleList: computed(() => {
    const len = data.discardList.length
    const styleList = []
    const d = Math.floor(len / 10) + 1
    for (let i = 0; i < len; i++) {
      const style = {}
      const j = (i - len / 2) / d
      const value = data.discardList[i]
      style.backgroundImage = `url(../../static/${value}.png)`
      style.transform = `translate(${j}px,${j}px)`
      if (i < data.recover) style.top = '-110px'
      styleList.push(style)
    }
    return styleList
  }),
  // 手牌卡牌样式列表 图片地址与是否被选中
  handStyleList: computed(() => {
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
  // 出牌区卡牌样式 图片地址
  selectedStyleList: computed(() => {
    const styleList = []
    for (const card of data.selectedSet) {
      const style = {}
      style.backgroundImage = `url(../../static/${card}.png)`
      styleList.push(style)
    }
    return styleList
  }),
  // boss图片地址
  bossStyle: computed(() => {
    return {
      backgroundImage: `url(../../static/${data.boss}.png)`,
    }
  }),
  // 当先显示的规则
  rule: computed(() => rules[data.ruleIndex]),
  // 剩余生命值
  rest: computed(() => data.joker1 + data.joker2),
})

// 监听阶段变化，设置当前是否可操作
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
