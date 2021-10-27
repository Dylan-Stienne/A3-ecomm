import Product, { IProduct } from "./Product"

interface IProductListProps {
    products: IProduct[]
}

export default function ProductList(props: IProductListProps) {
    return (
        <div>
            {props.products.map((product, index) => <Product key={index} product={product} />)}
        </div>
    )
}