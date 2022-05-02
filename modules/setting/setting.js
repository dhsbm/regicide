import { reactive } from 'vue'

// 游戏设置数据
const setting = reactive({
  upperLimit: 8, // 手牌上限
  infiniteLife: false, // 无限生命
  sort: true, // 敌人按序
  regress: true, // 归化敌人
})

export default setting
