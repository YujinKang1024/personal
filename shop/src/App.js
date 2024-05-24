import styled from "styled-components";
import "./App.css";
import { Button } from "./Styled/Button.js"
import NavBar from "./Styled/NavBar.js";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`

export default function App() {
  return (
    <>
        <Main>
        <NavBar>
        </NavBar>
        <Button />
      </Main>
    </>
  );
}
