import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Main from "./routes/Main.js";
import Detail from "./routes/Detail.js";
import NavBar from "./component/NavBar.js";
import Cart from "./routes/Cart.js";

import "./App.css";
import { productData } from "./productData.js";
import { useState } from "react";

const Body = styled.body`
  display: flex;
  flex-direction: column;
  width: 100vw;
`

export default function App() {
  const [ productDataList, setProductDataList ] = useState(productData);

  function setNextProductDateList(nextData) {
    if (nextData) setProductDataList([...productDataList, ...nextData]);
  }

  return (
    <>
      <Body>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main productDataList={productDataList} setProductData={setNextProductDateList} />} />
          <Route path="/detail/:id" element={<Detail productDataList={productDataList}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div>페이지를 표시할 수 없습니다.</div>} />
        </Routes>
      </Body>
    </>
  );
}
