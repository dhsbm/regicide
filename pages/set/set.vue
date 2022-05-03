<template>
  <back></back>
  <view class="set">
    <view class="setting">
      <view class="settingKey">手牌上限:</view>
      <view class="settingValue upperLimit">
        <view class="dec" @tap="setting.upperLimit > 6 && setting.upperLimit--"></view>
        {{ setting.upperLimit }}
        <view class="inc" @tap="setting.upperLimit < 10 && setting.upperLimit++"></view>
      </view>
    </view>
    <view class="setting">
      <view class="settingKey">无限生命:</view>
      <view class="settingValue" @tap="changeSetting('life')">
        {{ setting.infiniteLife ? '开' : '关' }}
      </view>
    </view>
    <view class="setting">
      <view class="settingKey">敌人顺序:</view>
      <view class="settingValue" @tap="changeSetting('sort')">
        {{ setting.sort ? '固定' : '随机' }}
      </view>
    </view>
    <view class="setting">
      <view class="settingKey">归化敌人:</view>
      <view class="settingValue" @tap="changeSetting('regress')">
        {{ setting.regress ? '开' : '关' }}
      </view>
    </view>
  </view>
</template>

<script setup>
import _ from '@/modules'
import update from '@/components/update.vue'
const { setting, changeSetting } = _
</script>

<style lang="scss" scoped>
.set {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #eee;
  align-items: center;
  justify-content: center;
  .setting {
    width: 360px;
    height: 60px;
    display: flex;
    color: #ccc;
    font-weight: 600;
    text-align: center;
    font-size: 26px;
    line-height: 60px;

    .settingKey {
      width: 200px;
    }
    .settingValue {
      flex: 1;
      text-align: center;
    }
    .upperLimit {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .dec,
      .inc {
        width: 60px;
        height: 60px;
        background-color: red;

        clip-path: path('M 20 30 L 40 20 L 40 40 z');
      }
      .inc {
        clip-path: path('M 40 30 L 20 20 L 20 40 z');
      }
    }
  }
}
</style>
