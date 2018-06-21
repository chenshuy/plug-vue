## 确认框组件

---
基础组件，可根据项目实际修改样式，拓展功能


### 1. 在main.js中引入，使用组件

```
//main.js:

<!-- 引入 -->
import Vue from 'vue';
import Confirm from './components/Confirm/index';

<!-- 使用 -->
Vue.use(Confirm);
```

### 2. 使用

```
// 参数：

export default {
  methods:{
    openConfirm() {
      this.$confirm('确认框！')
        .then(() => {
          console.log('点了确认！');
        })
        .catch(() => {
          console.log('点了取消！');
        });
    }
  }
}
```
