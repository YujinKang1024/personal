import styled from "styled-components";
import { MainSection } from "../shared/MainSection.js";
import ItemContainer from "./ItemContainer.js";

const MainBanner = styled.div`
  height: 35vh;
  background-image: url("./bg.png");
  background-size: cover;
  background-position: center;
`;

export default function Main() {
  return(
    <>
      <MainBanner />
      <MainSection>
        <ItemContainer />
      </MainSection>
    </>
  );
}