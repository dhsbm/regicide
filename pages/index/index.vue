<template>
  <view class="home">
    <view class="container">
      <view class="play" @click="toPage('game')">开始游戏</view>
      <view class="rule" @click="toPage('rule')">游戏规则</view>
      <view class="set" @click="toPage('set')">游戏设置</view>
    </view>
  </view>
</template>

<script setup>
  const toPage = (page) => {
    uni.navigateTo({
      url: `../${page}/${page}`,
      animationDuration: 2000
    })
  }
</script>

<style lang="scss">
  .home {
    height: 100vh;
    box-sizing: border-box;
    background-image: url(@/static/background.png);
    background-size: 100% 100%;
    display: flex;
    justify-content: center;

    .container {

      display: flex;
      flex-direction: column;
      justify-content: center;

      .play,
      .rule,
      .set {
        width: 120rpx;
        height: 30rpx;
        font-size: 24rpx;
        line-height: 30rpx;
        text-align: center;
        color: #eee;
        background-color: #555;
        border-radius: 40rpx;
        margin: 20rpx 0;
        opacity: 0.6;

        &:active {
          opacity: 1;
        }
      }
    }

  }
</style>
