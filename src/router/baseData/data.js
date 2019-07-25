import Layout from '@/layout'

export default {
  path: 'data',
  hidden: false,
  redirect: '/baseData/data/list',
  component: Layout,
  meta: { title: 'baseDataData', icon: 'example' },
  children: [
    {
      path: 'list',
      name: 'baseDataList',
      component: () => import('@/views/baseData/list/index'),
      meta: { title: 'baseDataList', icon: 'example' }
    },
    {
      path: 'add',
      name: 'baseDataForm',
      hidden: true,
      component: () => import('@/views/baseData/form/index'),
      meta: { title: 'baseDataAdd', icon: 'example' }
    },
    {
      path: 'edit',
      name: 'baseDataForm',
      hidden: true,
      component: () => import('@/views/baseData/form/index'),
      meta: { title: 'baseDataEdit', icon: 'example' }
    },
    {
      path: 'read',
      name: 'baseDataForm',
      hidden: true,
      component: () => import('@/views/baseData/form/index'),
      meta: { title: 'baseDataRead', icon: 'example' }
    }
  ]
}
