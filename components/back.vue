<template>
  <view class="back" @tap="back"></view>
</template>

<script setup>
const back = () => {
  // uni.navigateBack({
  //   animationType: 'pop-out',
  //   animationDuration: 2000,
  // })
  uni.navigateTo({
    url: `../index/index`,
    animationType: 'pop-in',
    animationDuration: 2000,
  })
}
</script>

<style>
.back {
  position: fixed;
  top: 10rpx;
  left: 10rpx;
  height: 40rpx;
  width: 40rpx;
  font-size: 20rpx;
  line-height: 30rpx;
  text-align: center;
  opacity: 0.5;
  background-color: #eee;
  background-image: url(@/static/back.png);
  background-size: 30rpx 30rpx;
  background-position: 5px 5px;
  background-repeat: no-repeat;
  z-index: 10;
}
</style>
