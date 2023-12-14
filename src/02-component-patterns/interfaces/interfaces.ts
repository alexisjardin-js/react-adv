
import { Props as ProductCardProps} from '../components/ProductCard';
import { Props as PropsButtons } from '../components/ProductButtons';
import { Props as PropsImg } from '../components/ProductImage';
import { Props as PropsTitle} from '../components/ProductTitle';


export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;

}

export interface ProductCardHOCProps{
  ({ children, product }: ProductCardProps): JSX.Element;
  Buttons:(Props:PropsButtons) => JSX.Element;
  Image: (Props: PropsImg) => JSX.Element;
  Title: (Props:PropsTitle) => JSX.Element;
}