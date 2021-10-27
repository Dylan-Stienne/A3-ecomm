import { products } from './../../index';
import { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from "../../../components/Product"

export interface ISnipcartProduct {
    id: string
    name: string
    price: number
    url: string
    description: string
    image: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { productId } = req.query;
    const product: IProduct | undefined = products.find(p => p.id === productId);
    if (!product) {
        res.status(404).json({});
        return;
    }

    const snipcartProduct: ISnipcartProduct = { ...product, image: product?.image.src ?? "" }
}