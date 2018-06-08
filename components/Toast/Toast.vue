<template>
  <transition name="tip">
    <div v-if="show" class="tip-wrap">{{text}}</div>
  </transition>
</template>
<style scoped>
.tip-wrap {
  position: fixed;
  left: 0;
  right: 0;
  top: 30px;
  margin: auto;
  width: 200px;
  line-height: 20px;
  background: rgba(0,0,0,.5);
  padding: 10px;
  border-radius: 4px;
  color:#fff;
  z-index: 200;
  font-size: 14px;
  text-align: center;
}
.tip-enter {
  opacity: 0;
}
.tip-enter-active,
.tip-leave-active {
  transition: all 0.4s;
}
.tip-leave-to {
  top: -40px;
  opacity: 0;
}
</style>
