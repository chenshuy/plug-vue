<template>
  <transition name="ec">
    <div v-if="show" class="ec">
      <div @click.stop class="ec-box">
        <div class="ec-content">{{text}}</div>
        <div class="ec-box-buttons">
          <span class="ec-btn-cancel" @click="cancel">取消</span>
          <span class="ec-btn-success" @click="success">确定</span>
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped>
.ec {
  background: rgba(00, 00, 00, .5);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 150;
  text-align: center;
}
.ec-box {
  position: absolute;
  left: 0;
  right: 0;
  width: 400px;
  top: 30%;
  margin: auto;
  background: #fff;
  padding: 15px 15px 10px;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  border: 1px solid #ebeef5;
}
.ec-content {
  padding: 10px 0;
  min-height: 72px;
  line-height: 24px;
  color: #444;
  font-size: 14px;
  text-align: left;
}
.ec-box-buttons {
  text-align: right;
  font-size: 14px;
}
.ec-btn-success {
  background: #20a0ff;
  border-color: #20a0ff;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  color: #fff;
  margin: 0;
  height: 32px;
  line-height: 32px;
  padding: 0 15px;
  border-radius: 4px;
}
.ec-btn-cancel {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #c4c4c4;
  color: #1f2d3d;
  height: 30px;
  line-height: 30px;
  margin: 0;
  padding: 0 15px;
  border-radius: 4px;
}
.ec-enter {
  opacity: 0;
}
.ec-enter .ec-box {
  transform: scale(0);
}
.ec-enter-active {
  transition: opacity .3s;
}
.ec-enter-active .ec-box {
  transition: transform .3s;
}
.ec-leave-active {
  transition: opacity .2s;
}
.ec-leave-active .ec-box {
  transition: transform .2s;
}
.ec-leave-to {
  opacity: 0;
}
</style>
