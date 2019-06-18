import head from '@/components/head.vue'
import alertConfig from '@/components/alertMessage'

class Dialog {
  constructor(Vue) {
    this.AlertClass = Vue.extend(alertConfig)
    this.AlertComponent = null
  }
  init() {
    if (this.AlertComponent) {
      return this.AlertComponent
    } else {
      this.AlertComponent = new this.AlertClass()
      this.AlertComponent.$mount()
      document.body.appendChild(this.AlertComponent.$el)
      return this.AlertComponent
    }
  }
}
export default {
  install(Vue) {
    Vue.component('Head', head)
    // const AlertClass = Vue.extend(alertBox) // 组件类
    const dialog = new Dialog(Vue)
    Vue.prototype.$alert = (text) => {
      dialog.init().alertOpen(text)
    }

  }
}
