<template>
  <back></back>
  <view class="rule">
    <view>游戏背景</view>
    <view>
      这片大陆上有四个王国，但这四个王国的国王、皇后、骑士都被黑暗力量腐蚀了，所以王国的勇士纷纷挺身而出，要打倒被黑暗力量腐蚀的国王，将他们唤醒，恢复大陆的和平。
    </view>
    <view>游戏目标</view>
    <view>
      运用你的智慧，打败12个强大的敌人。每回合对敌人发起攻击，当攻击足够多时，敌人便会溃败。当最后一位国王被击败时，玩家获得胜利。但是当心！敌人会反击，玩家每回合都需要弃牌来抵挡敌人的攻击，如果不能再弃牌，就会失败。
    </view>
    <!-- 玩家抽取8张卡牌，不断进行回合，每回合有4个阶段，击败所有boss -->
    <view>游戏流程</view>
    <view>
      <view>
        每回合玩家可以从手中出牌，对当前的敌人造成伤害，卡牌上的数值就是伤害值，而花色指向了一种特殊能力。每个回合都有4个阶段。
      </view>
      <view class="phase">阶段1：打出一张卡牌来试图造成伤害。</view>
      <view class="phase">
        阶段2：激活你打出卡牌的对应技能。
        <view>
          <view>
            <text class="weight">黑桃</text>
            - 降低敌人攻击力
          </view>
          <view>
            <text class="weight">红桃</text>
            - 洗混墓地，回收卡牌加入牌库底部
          </view>
          <view>
            <text class="weight">梅花</text>
            - 本次伤害翻倍
          </view>
          <view>
            <text class="weight">方片</text>
            - 从牌堆抽取卡牌
          </view>
          相同花色的效果并不会叠加，激活顺序为：梅花-黑桃-红桃-方片
        </view>
      </view>
      <view class="phase">
        阶段3：将打出的牌放入墓地，造成伤害。
        <view>
          <view class="weight">杰克：10攻击力/20血量</view>
          <view class="weight">皇后：15攻击力/30血量</view>
          <view class="weight">国王：20攻击力/40血量</view>
          如果造成伤害大于敌人血量，敌人会被击败，放入墓地，跳过阶段4，面对下一名敌人。如果伤害刚好等于敌人血量，则会把敌人放在牌堆顶部。
        </view>
      </view>
      <view class="phase">
        阶段4：弃牌来抵挡敌人的反击。
        <view>敌人会对玩家造成等同其攻击力的伤害，玩家需要从手中弃掉数值之和不小于伤害的卡牌。</view>
      </view>
    </view>
    <view>敌人的免疫效果</view>
    <view>
      所有敌人都将免疫与自己花色相同的牌的能力。例如，玩家在对抗方片J时便无法在打出方片牌之后抽牌(不过这张牌依旧造成伤害)。
    </view>
    <view>宠物牌</view>
    <view>
      所有的A是宠物牌，可以和其他牌一起打出。宠物牌在计算伤害时算作1点，并且会为这次出牌添加自己花色的效果。
      <view>例如：玩家打出方片8和草花A时，抽18张牌并造成18点伤害。</view>
    </view>
    <view>连招</view>
    <view>
      在阶段1，玩家可以打出若干张数值相同的牌，只要其数值总和不超过10。使用连招时，会以数值总和来触发能力。
      <view>例如：打出黑桃3、方片、梅花3，则会抽18张牌，造成18点伤害，降低敌人18点攻击力。</view>
      <view>宠物牌不可以和连招一起打出，也不能用来和另一张宠物牌来组成连招。</view>
    </view>
    <view>归化敌人</view>
    <view>手中的J视为10点，Q视为15点，K视为20点。</view>
    <view>游戏结束</view>
    <view>当击败所有国王，玩家胜利；当玩家已经翻面2张joker且无法抵挡敌人的反击时，玩家失败。</view>
    <view>小技巧</view>
    <view>玩家的手牌是有上限的。在阶段4可以弃掉额外的牌来腾出手牌。当敌人攻击为0时，也可以不用弃牌，</view>
  </view>
</template>

<style lang="scss" scoped>
view {
  font-size: 14px;
  color: #222;
}
.rule {
  padding-bottom: 30px;
  background-color: #eee;
  & > view:nth-child(odd) {
    font-size: 30px;
    font-weight: 800;
    padding-top: 10px;
    padding-bottom: 8px;
    color: #e0c959;
    text-align: center;
  }
  & > view:nth-child(even) {
    padding: 0 60px;
    .phase {
      padding-top: 6px;
    }
    & > view {
      padding-left: 20px;
    }
  }
}

.weight {
  font-weight: 600;
}
</style>
