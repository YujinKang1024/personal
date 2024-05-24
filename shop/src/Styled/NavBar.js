import { useState } from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  width: 100vw;
  height: 7vh;
  background-color: #272B37;
  padding: 10px 20px;

  & > h3 {
    color: #ffffff;
    font-size: 28px;
    margin-top: 3px;
    margin-right: px;
  }

  & > p {
    color: #D0D1D3;
    font-size: 20px;
    margin-top: 6px;
    margin-left: 25px;
  }
`;

export default function NavBar() {
  const [items] = useState();

  return (
    <Header>
      <h3>VACO SHOP</h3>
      <p>Home</p>
      <p>Cart</p>
    </Header>
  );
}