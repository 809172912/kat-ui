import TopBar from './TopBar.vue'
import CButton from './CButton.vue'

const Components = {
  TopBar,
  CButton
}

const install = function (Vue) {
  Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  TopBar,
  CButton
}

export default {
  install
}
