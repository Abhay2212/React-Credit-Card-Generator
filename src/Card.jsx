import React from "react";
import CardFront from "./images/card-front.png";
import CardBack from "./images/card-back.png";
import CardLogo from "./images/card-logo.svg";

function Card({ cardData }) {
  const { cardholdername, cardnumber, month, year, cardcvc } = cardData;

  const randomTextName = !cardholdername ? (
    <div className="random-text-name">
      <p>JANE APPLESEED</p>
    </div>
  ) : null;

  const randomCardNumber = !cardnumber ? (
    <div className="random-text-number">
      <h2>0000 0000 0000 0000</h2>
    </div>
  ) : null;

  const randomMonthYear =
    !month / year ? (
      <div className="random-text-month">
        <p>00/00</p>
      </div>
    ) : null;

  const randomCvc = !cardcvc ? (
    <div className="random-text-cvc">
      <p>123</p>
    </div>
  ) : null;
  
  function formatCardNumber(cardNumber) {
    return cardNumber.replace(/\D/g, "").replace(/(\d{4})/g, "$1 ");
  }


  
  return (
    <div className="cards">
      <div className="card-front">
        <img src={CardFront} alt="card-front" />
        <div className="card-logo">
          <img src={CardLogo} alt="card-logo" />
        </div>
        <div className="card-text-front">
          <h2>
          {formatCardNumber(cardData.cardnumber)}
            {randomCardNumber}
          </h2>
          <div>
            <p>
              {cardholdername}
              {randomTextName}
            </p>
            <p>
              {month ? `${month}/` : ""}
              {year}
              {randomMonthYear}
            </p>
          </div>
        </div>
      </div>
      <div className="card-back">
        <img src={CardBack} alt="card-back" />
        <div className="card-text-back">
          <p>{cardcvc}{randomCvc}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;