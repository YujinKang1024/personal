import { useParams } from "react-router-dom";
import DetailNav from "../component/DetailNav";
import { useState } from "react";

export default function Detail({ productDataList }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const { id } = useParams();

  const currentProductData = (productDataList.find((item) => item.id === Number(id)));
  const {
    title: productTitle,
    content: productDesc,
    price: productPrice,
    img: procuctImg,
  } = currentProductData;

function setTabContents(buttonOrder) {
  setSelectedTab(buttonOrder);
}

  return (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src={procuctImg} width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{productTitle}</h4>
        <p>{productDesc}</p>
        <p>₩ {productPrice}</p>
        <button className="btn btn-danger">주문하기</button>
      </div>
    </div>
    <DetailNav setTabContents={setTabContents}/>
    <TabContent selectedTab={selectedTab} />
  </div>
  );
}

function TabContent({ selectedTab  }) {
  return [<div>내용 1</div>, <div>내용 2</div>, <div>내용 3</div>][selectedTab]
}

