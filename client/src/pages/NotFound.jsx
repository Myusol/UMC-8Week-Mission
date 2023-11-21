import React from "react";
import { LinkHome, NotFoundBox } from "./NotFound.style";

export default function NotFound() {
  return (
    <NotFoundBox>
        <h2>해당 페이지를 찾지 못했습니다.</h2>
        <div>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</div>
        <LinkHome to="/">메인 페이지로 이동</LinkHome>
    </NotFoundBox>
  );
}