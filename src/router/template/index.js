import Header from '@/layoutHeader'
import store from '@/store'

// lists
import external from './external'
import dashboard from './dashborad'

const moduleName = 'TemplateModule'

// 路由守卫
function beforeEnter(to, from, next) {
  store.dispatch('app/switchModule', moduleName)
  next()
}

export default {
  path: '/template',
  hidden: false,
  redirect: '/template/module',
  moduleName,
  component: Header,
  beforeEnter,
  children: [
    dashboard,
    external
  ]
}
