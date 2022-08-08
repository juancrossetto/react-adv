import React from 'react';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug  - Card',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product}>
          <ProductCard.Image img={product.img} />
          <ProductCard.Title title="Hola Mundo" />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product} className={'bg-dark'}>
          <ProductImage img={product.img} className="custom-image" />
          <ProductTitle title={'Hola Mundo'} className="text-white" />
          <ProductButtons className={'custom-buttons'} />
        </ProductCard>
      </div>
    </div>
  );
};
