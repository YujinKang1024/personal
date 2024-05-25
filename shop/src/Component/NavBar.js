import { Link } from "react-router-dom";
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
`;

const StyledLink = styled(Link)`
  color: #D0D1D3;
  font-size: 20px;
  margin-top: 6px;
  margin-left: 25px;
  text-decoration-line: none;
`;

export default function NavBar() {
  return (
    <Header>
      <h3>VACO SHOP</h3>
      <StyledLink to="/">HOME</StyledLink>
      <StyledLink to="/detail">CART</StyledLink>
    </Header>
  );
}
