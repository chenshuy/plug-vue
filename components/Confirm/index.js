import vue from 'vue';
import confirmComponent from './confirm';

const Confirm = {};

let ConfirmVM = null; // 存储confirm的实例

Confirm.install = (Vue) => {
  Vue.prototype.$confirm = (text) => {
    // 生成实例
    if (!ConfirmVM) {
      const ConfirmConstructor = vue.extend(confirmComponent);
      ConfirmVM = new ConfirmConstructor({
        el: document.createElement('div'),
        data() {
          return {
            text: '',
            show: false
          };
        }
      });
      document.body.appendChild(ConfirmVM.$mount().$el);
    }
    ConfirmVM.text = text;
    return new Promise((resolve, reject) => {
      ConfirmVM.show = true;
      ConfirmVM.success = () => {
        resolve('success');
        ConfirmVM.show = false;
      };
      ConfirmVM.cancel = () => {
        reject('fail');
        ConfirmVM.show = false;
      };
    });
  };
};

export default Confirm;
