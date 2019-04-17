import KButton from './Button.vue'

const Components = {
  KButton
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
  KButton
}

export default {
  install
}
