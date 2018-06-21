## 提示框组件

---
基础功能，可根据项目实际修改样式，拓展功能


### 1. 在main.js中引入，使用组件

``` javascript
//main.js:

<!-- 引入 -->
import Vue from 'vue';
import Toast from './components/Toast/index';

<!-- 使用 -->
Vue.use(Toast);
```

### 2. 使用

``` javascript
// 参数：
// duration: 持续时间（可不传，默认1800ms）

export default {
  methods:{
    openTop() {
      this.$toast('内容内容');
      // this.$toast('内容内容', 1800);
    }
  }
}
```
