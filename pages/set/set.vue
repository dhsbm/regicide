<template>
  <back></back>
  <view class="set">
    <view class="setting">
      <view class="settingKey">手牌上限：</view>
      <view class="settingValue">
        <view class="dec" @tap="setting.upperLimit > 6 && setting.upperLimit--">－</view>
        <view class="text">{{ setting.upperLimit }}</view>
        <view class="inc" @tap="setting.upperLimit < 10 && setting.upperLimit++">＋</view>
      </view>
    </view>
    <view class="setting">
      <view class="settingKey">连招上限：</view>
      <view class="settingValue">
        <view class="dec" @tap="setting.comboLimit > 10 && (setting.comboLimit -= 2)">－</view>
        <view class="text">{{ setting.comboLimit }}</view>
        <view class="inc" @tap="setting.comboLimit < 20 && (setting.comboLimit += 2)">＋</view>
      </view>
    </view>
    <view class="setting">
      <view class="settingKey">无限生命：</view>
      <view class="settingValue" @tap="changeSetting('life')">
        <view class="text">{{ setting.infiniteLife ? '开' : '关' }}</view>
      </view>
    </view>
    <view class="setting">
      <view class="settingKey">敌人顺序：</view>
      <view class="settingValue" @tap="changeSetting('sort')">
        <view class="text">{{ setting.sort ? '固定' : '随机' }}</view>
      </view>
    </view>
    <view class="setting">
      <view class="settingKey">敌人免疫：</view>
      <view class="settingValue" @tap="changeSetting('immune')">
        <view class="text">{{ setting.immune ? '开' : '关' }}</view>
      </view>
    </view>
    <view class="setting">
      <view class="settingKey">净化敌人：</view>
      <view class="settingValue" @tap="changeSetting('honor')">
        <view class="text">{{ setting.honor ? '开' : '关' }}</view>
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
    height: 50px;
    display: flex;
    color: #ccc;
    font-weight: bold;
    text-align: center;
    font-size: 26px;
    line-height: 50px;

    .settingKey {
      width: 200px;
    }
    .settingValue {
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      & > view {
        padding: 0 10px;
      }
    }
  }
}
</style>
