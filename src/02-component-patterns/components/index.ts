import { ProductCard as ProductCardHOC } from "./ProductCard"
import { ProductCardHOCProps } from "../interfaces/interfaces";

import {ProductsButtons} from './ProductButtons';
import {ProductImage}from './ProductImage';
import {ProductTitle} from './ProductTitle';

export {ProductsButtons} from './ProductButtons';
export {ProductImage}from './ProductImage';
export {ProductTitle} from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC,{
    Title: ProductTitle,
    Image:ProductImage,
    Buttons:ProductsButtons
})

export default ProductCard;