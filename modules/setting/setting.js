import { reactive } from 'vue'

// 游戏设置数据
const setting = reactive({
  upperLimit: 8, // 手牌上限
  infiniteLife: false, // 无限生命
  sort: true, // 敌人按序
  honor: true, // 荣誉消灭
})

export default setting
