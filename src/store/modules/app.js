import Cookies from 'js-cookie'
import { getLanguage } from '@/locales'
import { getCurrentModule } from '@/router/modules'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  lang: getLanguage(),
  device: 'desktop',
  currentModule: getCurrentModule()
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SWITCH_LANG: (state, lang) => {
    state.lang = lang
    Cookies.set('language', lang)
  },
  SWITCH_MODULE: (state, moduleName) => {
    state.currentModule = moduleName
    Cookies.set('currentModule', moduleName)
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  switchLang({ commit }, lang) {
    commit('SWITCH_LANG', lang)
  },
  switchModule({ commit }, moduleName) {
    commit('SWITCH_MODULE', moduleName)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
