import { ProductImage, ProductTitle, ProductsButtons } from '../components';
import ProductCard from '../components/index';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            value={shoppingCart[product.id]?.count || 0}
            onChange={onProductCountChange}>
            <ProductImage className="custom-imagen" />
            <ProductTitle className="text-bold" />
            <ProductsButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-card">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: '100px' }}
            onChange={onProductCountChange}
            value={product.count}>
            <ProductImage className="custom-imagen" />
            <ProductsButtons
              className="custom-buttons"
              style={{ display: 'flex', justifyContent: 'center' }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
