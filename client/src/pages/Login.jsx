import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginpageContainer, InputBox, ConfirmBtn, LoginInfo } from './Login.style'
import { useDispatch } from 'react-redux';
import { loginFail, loginRequest, loginSuccess } from './redux/actions';
import axios from 'axios';

const Login = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();  
  
  const handleChangeId = (e) => {
    setId(e.target.value);
    console.log(`현재 아이디 입력값: ${e.target.value}`);
  }

  const handleChangePw = (e) => {
    setPw(e.target.value);
    console.log(`현재 비밀번호 입력값: ${e.target.value}`);
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }

  const handleSubmit = async (e) => {
    console.log('handleSubmit 함수 실행');
    e.preventDefault();
    if (!id || !pw) {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    try {
      setIsLoading(true);
      dispatch(loginRequest({ id, pw }));
      const response = await axios.post('http://localhost:3000/user/login', { id: id, pw: pw }, { withCredentials: true });
      
      console.log(response.data.code)
      console.log(`로그인 요청 보냄 - 아이디: ${id}, 비밀번호: ${pw}`);

      if (response.data.code === 200) {
        dispatch(loginSuccess(response.data.userInfo));
        setTimeout(() => {
          setIsLoading(false);
          navigate('/');
        }, 1500);
      } else {
        throw new Error(response.data.code);
      }
    } catch (error) {
      console.log('Error Code:', error.code);
      console.log('Error Message:', error.message);
      setIsLoading(false);
      dispatch(loginFail(error));

      if (id !== 'umcweb') {
        alert('아이디를 찾을 수 없습니다.');
        return;
      }

      if (pw !== '1234') {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }
    }
  }


  return (
    <LoginpageContainer>
      <h2>
        로그인
      </h2>

      <LoginInfo>아이디와 비밀번호를 입력해주세요.</LoginInfo>

      <form onSubmit={handleSubmit}>
        <InputBox>
          <label htmlFor="id">아이디</label>
          <input type="text" id="id" placeholder="아이디" value={id} onChange={handleChangeId} />
        </InputBox>

        <InputBox>
          <label htmlFor="password">비밀번호</label>
          <div style={{position: 'relative'}}>
            <input type={showPassword ? "text" : "password"} id="password" placeholder="비밀번호" value={pw} onChange={handleChangePw} />
            <i style={{position: 'absolute', right: 20, top: 14, cursor: 'pointer', fontStyle: 'normal' }}
              onMouseEnter={() => setShowPassword(true)}
              onMouseLeave={() => setShowPassword(false)}>
              🔎
            </i>
          </div>
        </InputBox>

        <ConfirmBtn disabled={isLoading}>
          {isLoading ? 'Loading...' : '로그인'}
        </ConfirmBtn>
      </form>
    </LoginpageContainer>
  );
}

export default Login;