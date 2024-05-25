import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Main from "./Component/Main.js";
import Detail from "./Component/Detail.js";
import NavBar from "./Component/NavBar.js";

import "./App.css";

const Body = styled.body`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

export default function App() {
  return (
    <>
      <Body>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Body>
    </>
  );
}
