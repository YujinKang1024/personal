import { useState } from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";
import { productData } from "../productData";

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 85vw;
  margin-top: 20px;
`;

export default function ItemContainer() {
  const [ shoes ] = useState(productData);

  return (
    <ItemWrapper>
      {
        shoes.map((item) => {
          const {
            id,
            title: productTitle,
            content: productDesc,
            price: productPrice,
            img: procuctImg,
          } = item;

          return <ItemCard key={id} imgSrc={procuctImg} productTitle={productTitle} productDesc={productDesc} price={productPrice} />;
        })
      }
    </ItemWrapper>
  );
}
