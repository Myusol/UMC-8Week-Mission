import React from "react";
import { Link } from "react-router-dom";
import { LoginContainer, LoginBtn, LoginState } from './Login.style'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../pages/redux/actions';

function ComponentsLogin() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);  // isLoggedIn 상태 가져오기
  console.log(isLoggedIn)

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      dispatch(logout());
      console.log(isLoggedIn);
    }
  };

  return (
    <LoginContainer>
      {isLoggedIn ? (
        <>
          <LoginBtn onClick={handleLogout}>로그아웃</LoginBtn>
          <LoginState>환영합니다!</LoginState>
        </>
      ) : (
        <>
          <Link to="/Login">
            <LoginBtn>로그인</LoginBtn>
          </Link>
          <LoginState>로그인이 필요합니다.</LoginState>
        </>
      )}
    </LoginContainer>
  );
}

export default ComponentsLogin;