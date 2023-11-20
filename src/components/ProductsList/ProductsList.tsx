import { Box } from '@mui/material'
import React, { useState } from 'react'
import Product from '../Section/Product/Product'
import { PRODUCTS } from '../../mock/products.mock'

const ProductsList: React.FunctionComponent = () => {

    const [products, setProducts] = useState(PRODUCTS);
    return (
        <Box component={'div'}  id='product_list'>
            {PRODUCTS.map((product, index) => <Product url={product.url} key={index}  description={product.description} price={product.price} title={product.title} />)}
        </Box>
    )
}


export default ProductsList