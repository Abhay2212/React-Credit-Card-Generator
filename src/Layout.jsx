import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";
import BgImgRectangle from "./images/Rectangle 1.png";

function Layout() {
  const [cardData, setCardData] = useState({
    cardholdername: "",
    cardnumber: "", 
    month: "",
    year: "",
    cardcvc: "",
  });

  return (
    <div className="layout">
      <div className="left-layout">
        <img src={BgImgRectangle} alt="bg-img" />
      </div>
      <div className="right-layout">
        <Form cardData={cardData} setCardData={setCardData} />
      </div>
      <Card cardData={cardData} />
    </div>
  );
}

export default Layout;