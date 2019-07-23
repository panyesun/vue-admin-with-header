const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  lang: state => state.app.lang,
  currentModule: state => state.app.currentModule,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name
}
export default getters
