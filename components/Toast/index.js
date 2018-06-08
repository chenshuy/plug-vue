import vue from 'vue';
import toastComponent from './Toast';

const Toast = {};

let showTotas = false; // 存储totas显示状态
let toastVM = null; // 存储toast的实例

Toast.install = (Vue) => {
  Vue.prototype.$toast = (text, duration = 1800) => {
    // 判断是否存在toast
    if (showTotas) {
      return;
    }
    // 判断是否首次加载，生成实例
    if (!toastVM) {
      const ToastConstructor = vue.extend(toastComponent);
      toastVM = new ToastConstructor({
        el: document.createElement('div'),
        data() {
          return {
            text: '',
            show: false
          };
        }
      });
      // 挂载到body
      document.body.appendChild(toastVM.$mount().$el);
    }
    toastVM.text = text;
    toastVM.show = showTotas = true;
    // 关闭
    setTimeout(() => {
      toastVM.show = showTotas = false;
    }, duration);
  };
};

export default Toast;
