import React from "react";

function Stock({individualCard ,addToPortfolio, removeCard}) {

  const {price , name} = individualCard

  return (
    <div>
      <div className="card" onClick={()=>removeCard(individualCard)}>
        <div className="card-body" onClick={()=>addToPortfolio(individualCard)} >
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
