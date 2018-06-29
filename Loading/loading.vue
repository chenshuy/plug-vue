<template>
  <div class="loading-wrap">
    <div class="loading">
      <div class="icon"></div>
      <div class="text">加载中...</div>
    </div>
  </div>
</template>

<style scoped>
.loading-wrap {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: #999;
  background: #fff;
  z-index: 101;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
}
.loading {
  width: 100%;
  height: 60px;
  position: absolute;
  top: 40%;
  text-align: center;
}
.loading .icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
  border: 1px solid;
  border-color: #999 #999 transparent;
  border-radius: 50%;
  box-sizing: border-box;
  background: none;
  animation: loading 1s ease-in infinite;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>