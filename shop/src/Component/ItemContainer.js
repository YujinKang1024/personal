import styled from "styled-components";
import ItemCard from "./ItemCard";
import { useNavigate } from "react-router-dom";

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default function ItemContainer({ productDataList }) {
  const navigate = useNavigate();

  return (
    <ItemWrapper>
      {
        productDataList.map((item) => {
          const {
            id,
            title: productTitle,
            content: productDesc,
            price: productPrice,
            img: procuctImg,
          } = item;

          return (
            <ItemCard
              key={id}
              imgSrc={procuctImg}
              productTitle={productTitle}
              productDesc={productDesc}
              price={productPrice}
              onItemCardClick={() => navigate(`/detail/${id}`)}
            />
          );
        })
      }
    </ItemWrapper>
  );
}
