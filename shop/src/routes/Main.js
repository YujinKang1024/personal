import { useEffect, useState } from "react";
import styled from "styled-components";
import { MainSection } from "../shared/MainSection.js";
import ItemContainer from "../component/ItemContainer.js";
import { Button } from "../shared/Button.js";
import Loading from "../shared/Loading.js";
import { Outlet } from "react-router-dom";

import getProductsData from "../utils/axios.js";

const MainBanner = styled.div`
  height: 35vh;
  background-image: url("./bg.png");
  background-size: cover;
  background-position: center;
`;

export default function Main({ productDataList, setProductData }) {
  const [countClickMoreButton, setCountClickMoreButton] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCurrentData() {
      try {
        setIsLoading(true);
        const result = await getProductsData(countClickMoreButton);
        setProductData(result);
      } catch(err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (countClickMoreButton) getCurrentData();
  }, [countClickMoreButton]);

  async function handleClickMoreButton() {
    if (countClickMoreButton <= 2) {
      setCountClickMoreButton(countClickMoreButton + 1);
    }
  }

  return (
    <>
      <MainBanner />
      <MainSection>
        <Outlet />
        <ItemContainer productDataList={productDataList}/>
      </MainSection>
      <MainSection>
        { isLoading && <Loading /> }
        <Button
          onClick={handleClickMoreButton}
          clickCount={countClickMoreButton}
          disabled={countClickMoreButton < 2 ? false : true}
        >더 보기
        </Button>
      </MainSection>
    </>
  );
}
