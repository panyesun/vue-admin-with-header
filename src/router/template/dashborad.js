import Layout from '@/layout'

export default {
  path: 'module',
  hidden: false,
  redirect: '/template/module/dashboard',
  component: Layout,
  children: [
    {
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }
  ]
}
