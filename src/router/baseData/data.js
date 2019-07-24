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
    }
  ]
}
