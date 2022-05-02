<template>
  <back></back>
  <update :fun="init"></update>
  <view class="game">
    <view class="top">
      <!-- boss -->
      <view class="enemy">
        <view class="restBoss">剩余敌人:{{ data.bossList.length }}</view>
        <view class="boss" :style="[data.bossStyle, data.style.boss]"></view>
        <view class="bossProp weight">
          <text class="ATK">ATK:{{ data.bossATK }}</text>
          <text class="HP">HP:{{ data.bossHP }}</text>
        </view>
      </view>

      <!-- 牌堆 -->
      <view class="card">
        <view class="remainText">牌堆:{{ data.remainList.length }}</view>
        <view class="remain">
          <!-- 虽然不知道为什么，但如果这里以card为key，在放弃时移动端会出现bug -->
          <view class="remainBackground" v-for="(card, i) in data.remainList" :style="data.remainListStyle[i]"></view>
        </view>
        <!-- 墓地 -->
        <view class="discardText">墓地:{{ data.discardList.length }}</view>
        <view class="discard">
          <view
            class="discardBackground"
            :style="data.discardListStyle[i]"
            v-for="(card, i) in data.discardList"
            :key="card"
          ></view>
        </view>
      </view>

      <!-- 规则 -->
      <view class="rule" @tap="switchRule">
        <view v-for="value of data.rule" :key="value">{{ value }}</view>
        <view v-if="data.showRuleTip" class="tip">点击查看规则</view>
      </view>

      <!-- joker -->
      <view class="joker">
        <view v-if="data.showJokerTip" class="jokerText tip">翻面joker重新抽牌</view>
        <view class="joker1" @tap="abandon('joker1')">
          <view :style="data.style.joker1">
            <image src="../../static/joker1.png" mode="scaleToFill"></image>
          </view>
          <view :style="data.style.back1">
            <image src="../../static/backCard.png" mode="scaleToFill"></image>
          </view>
        </view>
        <view class="joker2" @tap="abandon('joker2')">
          <view :style="data.style.joker2">
            <image src="../../static/joker2.png" mode="scaleToFill"></image>
          </view>
          <view :style="data.style.back2">
            <image src="../../static/backCard.png" mode="scaleToFill"></image>
          </view>
        </view>
      </view>

      <!-- 出牌区 -->
      <view class="select" v-show="data.phase == 2 || data.phase == 3" :style="data.style.selects">
        <view
          class="selectCard"
          v-for="(item, i) in data.selectedSet"
          :style="[data.selectedListStyle[i], data.style.select]"
          :key="item"
        ></view>
      </view>

      <!-- 按钮区 -->
      <view class="buttons" v-show="data.allow">
        <button @tap="discardCard" :disabled="data.phase !== 4">弃牌</button>
        <button @tap="palyCard" :disabled="data.phase !== 1">出牌</button>
      </view>
    </view>

    <view class="bottom">
      <view class="phase">阶段{{ data.phase }}</view>
      <!-- 手牌 -->
      <view class="hand">
        <view class="handCard" v-for="(item, i) in data.handSet" :key="item" @tap="selectCard(item)">
          <view class="card" :style="data.handListStyle[i]"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import _ from '@/modules/index.js'
import update from '../../compontents/update.vue'
export default {
  setup() {
    return {
      ..._,
    }
  },
  components: {
    update,
  },
  mounted() {
    _.init()
  },
}
</script>
<style lang="scss" scoped>
.game {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #eee;
  .top {
    width: 100%;
    flex: 1;
    position: relative;

    .card {
      /* 牌堆 */
      .remain {
        position: absolute;
        left: 50px;
        top: 60px;
        z-index: 3;

        .remainBackground {
          position: absolute;
          left: 0;
          top: 0;
          height: 84px;
          width: 60px;
          background-image: url(../../static/backCard.png);
          background-size: 100% 100%;
          box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
        }
      }

      .remainText {
        position: absolute;
        left: 50px;
        top: 40px;
        width: 60px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
      }

      /* 墓地 */
      .discard {
        position: absolute;
        left: 50px;
        top: 170px;
        z-index: 1;

        .discardBackground {
          position: absolute;
          left: 0;
          top: 0;
          height: 84px;
          width: 60px;
          background-image: url(../../static/back.png);
          background-size: 100% 100%;
          box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
          transition: all 0.5s;
        }
      }

      .discardText {
        position: absolute;
        left: 50px;
        top: 150px;
        width: 60px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
      }
    }

    /* boss区 */
    .enemy {
      .boss {
        position: absolute;
        left: calc(50% - 50px);
        top: 40px;
        border-radius: 4px;
        height: 140px;
        width: 100px;
        z-index: 5;
        background-size: 100% 100%;
        transition: all 0.5s;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
      }

      .restBoss {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 20px;
        height: 20px;
        font-size: 12px;
        line-height: 20px;
      }

      .bossProp {
        position: absolute;
        left: calc(50% + 50px);
        top: 40px;
        height: 140px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .ATK,
        .HP {
          font-size: 22px;
          text-align: center;
          padding-left: 10px;
        }
      }
    }

    // 剩余生命
    .joker {
      position: absolute;
      right: 40px;
      top: 150px;
      width: 140px;

      .jokerText {
        width: 100%;
        top: -25px;
        position: absolute;
        font-weight: 500;
        text-align: center;
      }
      .joker1,
      .joker2 {
        position: absolute;
        top: 0;
        height: 84px;
        width: 60px;
        // background-image: url(../../static/back.png);
        // background-size: 100% 100%;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);

        view {
          height: 100%;
          width: 100%;
          border-radius: 2px;
          overflow: hidden;
          background-color: rgb(255, 255, 255);
          position: absolute;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          transition: all 0.5s;

          image {
            height: 100%;
            width: 100%;
            box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
          }
        }

        view:nth-child(1) {
          transform: rotateY(0);
        }

        view:nth-child(2) {
          position: relative;
          transform: rotateY(-180deg);
        }
      }

      .joker1 {
        left: 0;
      }

      .joker2 {
        right: 0;
      }
    }

    // 打牌区
    .select {
      position: absolute;
      top: 190px;
      display: flex;
      left: 50%;
      z-index: 4;
      transform: translateX(-50%);
      width: 200px;
      justify-content: center;
      transition: all 0.5s;

      .selectCard {
        height: 63px;
        width: 45px;
        background-size: 100% 100%;
        transition: all 0.5s;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      }
    }

    .buttons {
      position: absolute;
      bottom: 16px;
      display: flex;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      justify-content: center;

      button {
        height: 30px;
        width: 70px;
        border-radius: 15px / 15px;
        font-size: 20px;
        line-height: 30px;

        &[disabled] {
          color: #969696;
          background: linear-gradient(#dfdfdf 0%, #b9b9b9 50%, #dfdfdf 100%) !important;
        }

        &:nth-child(1) {
          background: linear-gradient(transparent 0%, #eada27 10%, #ffba17 50%, #eada27 90%, transparent 100%);
        }

        &:nth-child(2) {
          background: linear-gradient(transparent 0%, #259cea 10%, #2574ea 50%, #259cea 90%, transparent 100%);
        }
      }
    }

    /* 规则区 */
    .rule {
      position: absolute;
      left: 140px;
      top: 50px;
      view {
        width: 160px;
        text-align: center;
        animation: switchRule 1s;
      }
    }
  }
  // 下方手牌区
  .bottom {
    position: relative;
    height: 100px;
    background-color: #ddd;

    .phase {
      position: absolute;
      font-size: 14px;
      top: 10px;
      right: 40px;
    }

    .hand {
      width: 520px;
      margin: 0 auto;
      display: flex;
      justify-content: center;

      .handCard {
        position: relative;
        height: 84px;
        width: 60px;
        margin: 2px;
        transition: all 0.3s;

        .card {
          position: absolute;
          top: 0;
          height: 84px;
          width: 60px;
          background-size: 100% 100%;
          box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
          animation: display 1s;
        }
      }
    }
  }
}
.tip {
  animation: switchRule 2s infinite alternate !important;
}
.weight {
  font-weight: 600;
}
@keyframes display {
  0% {
    opacity: 0;
    top: 200px;
  }

  100% {
    opacity: 1;
    top: 0;
  }
}
@keyframes switchRule {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
