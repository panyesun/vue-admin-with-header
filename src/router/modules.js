import Cookies from 'js-cookie'

// module items
import template from './template'

export const moduleMap = new Map([
  _generate(template)
])

function _generate(routerNode) {
  return template.moduleName ? [routerNode.moduleName, routerNode] : []
}

const modules = [...moduleMap.values()]

// export
export function getCurrentModule() {
  return Cookies.get('currentModule') || modules[0]['moduleName']
}

export default modules
