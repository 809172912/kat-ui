import Vue from 'vue'
import Router from 'vue-router'
import navJson from './nav.config.json'

let arrayArrayToArray = (arrayArray) => {
  let array = []
  arrayArray.forEach(item => {
    array = [...array, ...item]
  })
  return array
}

let countRoutes = (config) => {
  let routes = []
  config.forEach((route) => {
    if (!route.items) {
      route.component = r => require.ensure([], () =>
        r(require(`./docs/${route.name}.md`)))
      routes = [...routes, route]
    }
    if (route.items) {
      routes = [...routes, ...countRoutes(route.items)]
    }
  })
  return routes
}

Vue.use(Router)

export default new Router({
  routes: [...countRoutes(arrayArrayToArray(Object.values(navJson))), {
    path: '/',
    redirect: countRoutes(arrayArrayToArray(Object.values(navJson)))[0].path
  }]
})
