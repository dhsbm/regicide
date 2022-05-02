<template>
  <view class="update" @tap="update"></view>
</template>

<script setup>
const props = defineProps(['fun'])
const update = () => {
  props.fun()
}
</script>

<style>
.update {
  position: fixed;
  top: 10rpx;
  right: 10rpx;
  height: 40rpx;
  width: 40rpx;
  font-size: 20rpx;
  line-height: 30rpx;
  text-align: center;
  opacity: 0.5;
  background-color: #eee;
  background-image: url(@/static/update.png);
  background-size: 30rpx 30rpx;
  background-position: 5px 5px;
  background-repeat: no-repeat;
  z-index: 10;
}
</style>
