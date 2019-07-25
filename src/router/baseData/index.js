import Header from '@/layoutHeader'
import data from './data'
import store from '@/store'

const moduleName = 'baseDataModule'
// 路由守卫
function beforeEnter(to, from, next) {
  store.dispatch('app/switchModule', moduleName)
  next()
}

export default {
  path: '/baseData',
  hidden: false,
  redirect: '/baseData/data',
  moduleName,
  component: Header,
  children: [data],
  beforeEnter
}
