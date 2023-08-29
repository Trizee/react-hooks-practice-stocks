import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioArray, setPortfolioArray}) {

  const portfolioBox = portfolioArray.map(individualCard => <Stock key={individualCard.name} individualCard={individualCard}
    addToPortfolio={addToPortfolio}
  removeCard={removeCard}/>)

  function addToPortfolio(){
    console.log('fake')
  }

  function removeCard(card){
    setPortfolioArray(portfolioArray.filter(stock => stock.id !== card.id))
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioBox
      }
    </div>
  );
}

export default PortfolioContainer;
