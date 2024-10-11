import React from 'react';

const ProductList = ({items}) => {
  if (items.length === 0) {
    return <p>Item tidak ditemukan</p>;
  }
  return (
    <div className='section-center'>
      {items.map((item) => {
        const {id, title, img, desc, price} = item;
        return (
            <article key={id} className='menu-item'> 
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>Rp. {price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  )
};

export default ProductList;
