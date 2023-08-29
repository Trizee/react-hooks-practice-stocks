import React,{useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockArray, setStockArray] = useState([])
  const [portfolioArray , setPortfolioArray] = useState([])
  const [filterCat, setFilterCat] = useState('All')
  const [sort, setSort] = useState('All')

  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(data => setStockArray(data))
  },[])

  // console.log(stockArray)
  // console.log(portfolioArray)

  

  console.log(stockArray)

  const stocksToDisplay = stockArray.filter(stock => {
    if(filterCat === 'All'){return true }
    else{return stock.type === filterCat}
  })

  console.log(stocksToDisplay)

  return (
    <div>
      <SearchBar 
      setStockArray={setStockArray}
      setFilterCat={setFilterCat}
      stockArray={stockArray}
      // alphaSort={alphaSort}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
          stockArray={stocksToDisplay}
          setPortfolioArray={setPortfolioArray}
          portfolioArray={portfolioArray}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
          portfolioArray={portfolioArray}
          setPortfolioArray={setPortfolioArray}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
