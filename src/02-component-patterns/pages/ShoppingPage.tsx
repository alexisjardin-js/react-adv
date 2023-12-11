//import { ProductImage, ProductTitle, ProductsButtons } from "../components"

import { ProductImage, ProductTitle, ProductsButtons } from "../components"
import ProductCard from '../components/index';



const product = {
    id: '1',
    title: 'Coffee Mugs',
    img: './coffee-mug.png'
}



export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title={"cafe"} />
                    <ProductsButtons />
                </ProductCard>


                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>

    )
}
