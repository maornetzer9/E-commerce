import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Product from '../Product/Product'
import UserApiRequest from '../../apis/user';
import '../Product/product.css'
import Loader from '../Loader/Loader';

interface IProductList { className?: string; id?: string; url?: string; description?: string; image?: string; title?: string; price?: string; salePrice?: string; category?: string; }

const ProductsList: React.FunctionComponent<IProductList> = ({ className }) => {

    const baseUrl = 'http://localhost:4200/user/sign'  || 'http://localhost:4200/product/E-Commerce';

    const [products, setProducts] = useState<IProductList[]>([]);
    const [productsRequest, setProductsRequest] = useState<{
        loading:boolean;
        data:IProductList[] | null;
        error: Error | null;
    }>({
        loading:false,
        data:null,
        error:null,
    })

    const getProducts = async () => {

        try
        {
            setProductsRequest((prevState) => {
                return {
                    ...prevState,
                    loading:true,
                }
            })
        
            const response = await new UserApiRequest(baseUrl).getProducts();
    
             setProductsRequest((prevState) => {
                return {
                    ...prevState,
                    loading:false,
                    data:response
                }
            })

            setProducts(response);
        }
        catch(error)
        {
            if(error instanceof Error)
             {

                const message = error.message;
                setProductsRequest((prevState) => {
                    return {
                        ...prevState,
                        loading:false,
                        error: new Error(message)
                    }
                })
             }
        }

        
    }

    useEffect(() => {

        const fetchData = async () => await getProducts()
        
        fetchData()
    }, [])


    if(!productsRequest.data || productsRequest.loading) return <Loader/>

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