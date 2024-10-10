import React from 'react'

export const PriceFilter = ({prices, filterByPrice}) => {
  return (
    <div>
        <div className="btn-container">
        {prices.map((price, index) => {
        return (
          <button 
            type="button" 
            className="filter-btn" 
            key={index}
            onClick={() => filterByPrice(price)}
          >
            {price === 'all' ? 'All Prices' : `< Rp${price}`}
          </button>
        );
        })}
    </div>
    </div>
  )
}
