import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css';
import { useContext } from "react";

export const ProductTitle = ({ title }: { title?: string }) => {
    const { product } = useContext(ProductContext)

    return (
        <span className={styles.productDescription}>{title ? title : product.title}</span>
    )
}