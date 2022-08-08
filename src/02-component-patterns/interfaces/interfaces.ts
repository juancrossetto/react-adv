import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButtons';

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (val: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (ProductTitleProps: { title?: string; className?: string }) => JSX.Element;
  Image: (ProductImageProps: { img?: string; className?: string }) => JSX.Element;
  Buttons: (ProductButtonsProps: { className?: string }) => JSX.Element;
}
