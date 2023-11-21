import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './actionTypes';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  userInfo: null,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        userInfo: action.data,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,  // 로그아웃 시 isLoggedIn을 false로 설정
      };
    default:
      return state;
  }
}