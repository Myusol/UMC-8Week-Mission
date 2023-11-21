import React, { useState } from "react";
import { LoginContainer, LoginBtn, LoginState } from './Login.style'

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  const buttonText = isLoggedIn ? "로그아웃" : "로그인";
  const welcomeText = isLoggedIn ? "환영합니다!" : "로그인이 필요합니다.";

  return (
    <LoginContainer>
      <LoginBtn onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}>
        {buttonText}
      </LoginBtn>
      <LoginState>{welcomeText}</LoginState>
    </LoginContainer>
  );
}
