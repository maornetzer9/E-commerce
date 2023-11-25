import { Box } from '@mui/material'
import React from 'react'
import Product from '../Product/Product'
import { PRODUCTS } from '../../mock/products.mock'
import '../Product/style.css'

interface IProductList { className?: string }

const ProductsList: React.FunctionComponent<IProductList> = ({ className }) => {

    return (
        <Box
            component={'div'}
            id='product_list'
        >
            {PRODUCTS.map((product, index) =>
                <Product
                    url={product.url}
                    key={index}
                    description={product.description}
                    price={product.price}
                    title={product.title}
                    salePrice={product.salePrice}
                />
            )}
        </Box>
    )
}


export default ProductsList