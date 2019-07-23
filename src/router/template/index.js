import Header from '@/layoutHeader'

// lists
import external from './external'
import dashboard from './dashborad'

export default {
  path: '/template',
  hidden: false,
  redirect: '/template/module',
  moduleName: 'TemplateModule',
  component: Header,
  children: [
    dashboard,
    external
  ]
}
