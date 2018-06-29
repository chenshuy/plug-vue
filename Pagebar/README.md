## 分页组件

### 在需要分页的list中引入组件
``` javascript
// template
<template>
  <page-bar :pageInfo='page' @getPage='getPage'></page-bar>
</template>

// script
export default {
  components: {
    PageBar
  },
  data () {
    page: {
      count: 0, // 总条数
      number: 8, // 每页显示数量
      page: 1 // 当前页码
    }
  },
  methods: {
    // 请求列表接口
    getList () {
      const fromData = {
        number: this.page.number,
        page: this.page.page
      }
      this.axios(fromData).then(() => {...})
    },
    // 分页组件传递过来的事件，num = 页码
    getPage (num) {
      this.page.page = num
      this.getList()
    }
  }
}
```
