import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface Props {
  img?: string;
  className?: string;
}

export const ProductImage = ({ img = '', className }: Props) => {
  const { product } = useContext(ProductContext);
  const imgToShow = img ? img : product.img ? product.img : noImage;
  return <img className={`${styles.productImg} ${className}`} src={imgToShow} alt="Coffee img" />;
};
