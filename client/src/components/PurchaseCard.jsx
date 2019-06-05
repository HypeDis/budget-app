import React from 'react';

const PurchaseCard = props => {
  return (
    <div>
      <h3>Purchase: {props.name}</h3>
      <p>Cost: ${props.cost}</p>
    </div>
  );
};

export default PurchaseCard;
