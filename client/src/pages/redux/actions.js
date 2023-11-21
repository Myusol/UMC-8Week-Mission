import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './actionTypes'

export function loginRequest(data) {
  return { type: LOGIN_REQUEST, data }
}
export function loginSuccess(data) {
  return { type: LOGIN_SUCCESS, data }
}
export function loginFail(error) {
  return { type: LOGIN_FAIL, error }
}
export function logout() {
  return { type: LOGOUT };
}