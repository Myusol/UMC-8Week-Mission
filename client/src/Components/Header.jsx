import React from "react";
import { Link } from "react-router-dom";
import { GlobalStyle, FixedHeader, Logo, HomeNav, LinkA  } from './Header.style'
import LoginControl from "./LoginControl";
import Login from "./Login";


const Header = () => {
  const handleItemClick = () => {
    console.log("/Home");
  };

  return (
    <FixedHeader>
        <GlobalStyle />
        <Link to="/">
            <Logo
            style={{ width: "160px", height: "20px" }}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="로고"
            onClick={handleItemClick}
            />
        </Link>
        <HomeNav>
            <li>
                <LinkA to="/Movies">영화</LinkA>
            </li>
            <li>
                <LinkA to="/TV">TV 프로그램</LinkA>
            </li>
            <li>
                <LinkA to="/Celebrity">인물</LinkA>
            </li>
            <li>
                <Login />
                    
                {/* <LoginControl /> */}
            </li>
        </HomeNav>
    </FixedHeader>
  );
};

export default Header;