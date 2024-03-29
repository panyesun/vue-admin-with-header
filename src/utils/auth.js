import Cookies from 'js-cookie'

const TokenKey = 'XY_MES'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function resetEnv() {
  return Cookies.remove('currentModule')
}
