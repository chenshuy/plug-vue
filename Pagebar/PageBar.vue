<template>
  <div class="page-bar">
    <div class="fr">
      <div @click="prePage" class="pre"></div>
      <div class="pages">
        <span @click="getPage(item)" v-for="item in pagesArr" :class="{'active': item === pageInfo.page}" :key="item.id">
          {{ item }}
        </span>
      </div>
      <div class="skip">
        <input @blur="skip" @keyup.enter="skip" v-model.number="inputText" class="input_text" type="text"> /{{pageCount}}页</div>
      <div @click="nextPage" class="next"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showItem: 5, // 界面显示的总页码数量
      inputText: 1
    };
  },
  props: ['pageInfo'],
  computed: {
    // 总页数
    pageCount() {
      return Math.ceil(this.pageInfo.count / this.pageInfo.number);
    },
    // 页数组
    pagesArr() {
      const list = [];
      if (this.pageInfo.page < this.showItem) {
        let i = Math.min(this.showItem, this.pageCount);
        while (i) {
          list.unshift(i--);
        }
      } else {
        let middle = this.pageInfo.page - Math.floor(this.showItem / 2);
        let j = this.showItem;
        if (middle > (this.pageCount - this.showItem)) {
          middle = (this.pageCount - this.showItem) + 1;
        }
        while (j--) {
          list.push(middle++);
        }
      }
      return list;
    }
  },
  methods: {
    // 前页页码
    getPage(index) {
      if (this.pageInfo.page === index) {
        return;
      }
      this.inputText = index;
      this.getPageNum(index);
    },
    // 向父组件传递页码
    getPageNum(num) {
      this.$emit('getPage', num);
    },
    // 上一页
    prePage() {
      if (this.pageInfo.page === 1) {
        return;
      }
      let index = this.pageInfo.page;
      index--;
      this.getPage(index);
    },
    // 下一页
    nextPage() {
      if (this.pageInfo.page === this.pageCount) {
        return;
      }
      let index = this.pageInfo.page;
      index++;
      this.getPage(index);
    },
    // 跳转
    skip() {
      if (this.inputText === this.pageInfo.page) {
        return;
      }
      if (this.inputText > this.pageCount) {
        this.inputText = this.pageCount;
      } else if (this.inputText < 1) {
        this.inputText = 1;
      }
      this.getPage(this.inputText);
    }
  }
};

</script>

<style scoped lang="less">
.page-bar {
  height: 30px;
  overflow: hidden;
  font-size: 14px;
  .fr {
    float: right;
  }
  .pre,
  .next {
    float: left;
    margin: 3px 8px 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    cursor: pointer;
  }
  .pre {
    border-right: 12px solid #ac8858;
  }
  .next {
    border-left: 12px solid #ac8858;
  }
  .pages {
    float: left;
    span {
      float: left;
      height: 28px;
      line-height: 28px;
      min-width: 28px;
      margin: 0 2px;
      border-radius: 3px;
      color: #ac8858;
      border: 1px solid #ac8858;
      cursor: pointer;
      &.active,
      &:hover {
        background: #ac8858;
        color: #fff;
      }
    }
  }
  .skip {
    float: left;
    border: 1px solid #ac8858;
    height: 28px;
    padding: 0 8px;
    border-radius: 3px;
    color: #ac8858;
    line-height: 28px;
    margin: 0 2px;
    .input_text {
      width: 28px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      text-align: center;
      border: 1px solid #ccc;
    }
  }
}

</style>
