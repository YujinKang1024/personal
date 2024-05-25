import styled from "styled-components";

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 370px;
  margin: 50px 35px;
  padding: 15px;
  background-color: #B1B9B4;
  border-radius: 2px;

  & > img {
    width: 80%;
    margin: 30px 0;
    border-radius: 5px;
  }

  & > h5 {
    margin-bottom: 20px;
  }

  & > b {
    color: #125B9E;
    margin-bottom: 7px;
  }

  & > p {
    padding: 10px;
    word-break: keep-all;
    overflow: hidden;
  }
`;

export default function ItemCard({ imgSrc, productTitle, productDesc, price }) {
  return (
    <ItemBox>
      <img src={imgSrc} />
      <h5>{productTitle}</h5>
      <b>{`₩ ${price}`}</b>
      <p align="center">{productDesc}</p>
    </ItemBox>
  );
}
