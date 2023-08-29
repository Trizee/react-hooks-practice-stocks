import React from "react";
import Stock from "./Stock";

function StockContainer({stockArray, setPortfolioArray ,portfolioArray}) {

  console.log(stockArray)

  const stockBox = stockArray.map(individualCard => 
  <Stock key={individualCard.id} individualCard={individualCard}  portfolioArray={portfolioArray} removeCard={removeFake} addToPortfolio={addToPortfolio}/>)
  function removeFake(){
    console.log("hi")
  }
  function addToPortfolio(card){
    setPortfolioArray([...portfolioArray,card])
  }

  return (
    <div>
      <h2>Stocks</h2>
      {stockBox}
    </div>
  );
}

export default StockContainer;
