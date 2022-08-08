import React, { createContext, ReactElement } from 'react';
import styles from '../styles/styles.module.css';
import useProducts from '../hooks/useProducts';
import { ProductContextProps, Product } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
}

export const ProductCard = ({ product, children, className }: Props) => {
  const { counter, increaseBy } = useProducts(0);
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};
