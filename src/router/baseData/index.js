import Header from '@/layoutHeader'
import data from './data'

export default {
  path: '/baseData',
  hidden: false,
  redirect: '/baseData/data',
  moduleName: 'baseDataModule',
  component: Header,
  children: [data]
}
