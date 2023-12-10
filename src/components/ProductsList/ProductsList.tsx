import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Product from '../Product/Product'
import UserApiRequest from '../../apis/user';
import '../Product/product.css'

interface IProductList { className?: string; id?: string; url?: string; description?: string; image?: string; title?: string; price?: string; salePrice?: string; category?: string; }

const ProductsList: React.FunctionComponent<IProductList> = ({ className }) => {

    const baseUrl = 'http://localhost:4200/product/E-Commerce'

    const [products, setProducts] = useState<IProductList[]>([]);


    const getProducts = async () => {
        const response = await new UserApiRequest(baseUrl).getProducts();

        setProducts(response);
    }

    useEffect(() => {

        const fetchData = async () => {
            try 
            {
                await getProducts()
            }
            catch(err) 
            {
                console.log('Error Fetching Products:', err);
            }
        }
        fetchData()
    }, [])


    return (
        <Box
            component={'div'}
            id='product_list'
        >
            {products.map((product, index) =>
                <Product
                    key={index}
                    url={`${product.image}`}
                    description={product.title}
                    title={product.category}
                    price={`$${product.price}`}
                    salePrice={product.salePrice}
                />
            )}
        </Box>
    )
}

export default ProductsList