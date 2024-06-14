import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Product from '../Product/Product'
import UserApiService from '../../services/user';
import '../Product/product.css'
import Loader from '../Loader/Loader';

interface IProductList { className?: string; id?: string; url?: string; description?: string; image?: string; title?: string; price?: string; salePrice?: string; category?: string; }

/* eslint-disable */
const ProductsList: React.FunctionComponent<IProductList> = ({ className }) => {

    let baseUrl: string;   
    
    if(process.env.NODE_ENV !== "development")
    {
        baseUrl =  "https://e-commerce-vpm6.onrender.com/product/E-Commerce";
    }
    else
    {
        baseUrl = 'http://localhost:4200/product/E-Commerce'; 
    }
    
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
        
            const response = await new UserApiService(baseUrl).getProducts();
    
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
            {!productsRequest.loading  ? products.map((product, index) =>
                <Product
                    key={index}
                    url={`${product.image}`}
                    description={product.title}
                    title={product.category}
                    price={`$${product.price}`}
                    salePrice={product.salePrice}
                />
            ) : <Loader/> }
        </Box>
    )
}

export default ProductsList