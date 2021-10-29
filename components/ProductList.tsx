import Product, { IProduct } from "./Product"

interface IProductListProps {
    products: IProduct[],
    onAddProductToCart: Function
}

export default function ProductList(props: IProductListProps) {
    return (
        <div className="product-list">
            {props.products.map((product, index) => <Product key={index} product={product} onAddProductToCart={() => props.onAddProductToCart()}/>)}
        </div>
    )
}