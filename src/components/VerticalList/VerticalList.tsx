import React, { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Product from '../Product/Product';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import UserApiService from '../../services/user';
import Loader from '../Loader/Loader';
import './verticalList.css'

interface IVerticalList { image?: string; description?: string; price?: string; salePrice?: string; title?: string; key?: number; category?: string; }

const VerticalList: React.FunctionComponent<IVerticalList> = () => {

    const [leftArrowPosition, setLeftArrowPosition] = useState(0);
    const [rightArrowPosition, setRightArrowPosition] = useState(0);
    const [productsRequest, setProductsRequest] = useState<{
        loading:boolean;
        data:IVerticalList[] | null;
        error: Error | null;
    }>({
        loading:false,
        data:null,
        error:null,
    })

    let baseUrl: string;   
    
    // if(process.env.NODE_ENV !== "development")
    // {
        baseUrl =  "https://e-commerce-vpm6.onrender.com/product/E-Commerce";
    // }
    // else
    // {
        // baseUrl = 'http://localhost:4200/product/E-Commerce'; 
    // }

    const getProducts = async () => {
        try
        {
           setProductsRequest((prevState) => {
            return {
                ...prevState,
                loading: true
            }
           })

            const response = await new UserApiService(baseUrl).getProducts();

            setProductsRequest((prevState) => {
                return {
                    ...prevState,
                    loading: false,
                    data: response
                }
            })
        }
        catch(err)
        {
            console.error(err);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try { await getProducts() }
            catch (err) { console.log('Error Fetching Data:', err); }
        }
        fetchData()
    }, [])

    if(!productsRequest.data || productsRequest.loading) return <Loader />


    const scroll = (direction: 'left' | 'right') => {
        const container = document.getElementById('vertical_list');
        if (container) 
        {
            let scrollAmount = 950;
            if (direction === 'right') 
            {
                window.innerWidth <= 600 ? scrollAmount = 320 : scrollAmount = 950

                container.scrollLeft += scrollAmount;
                setLeftArrowPosition(Math.max(leftArrowPosition - scrollAmount, 0));
            }
            else 
            {
                window.innerWidth <= 600 ? scrollAmount = 320 : scrollAmount = 950

                container.scrollLeft -= scrollAmount;
                setRightArrowPosition(Math.max(rightArrowPosition - scrollAmount, 0));
            }
        }
    };

    return (
        <Box
            id='vertical_list_container'
            component={'div'}
        >
            <Box
                id="vertical_list"
                component={'div'}
                width={window.innerWidth <= 600 ? '76%' : '66%'}
                sx={{ scrollBehavior: 'smooth' }}
            >
                { !productsRequest.loading ?  productsRequest.data.map((product, index) => (
                    <Product
                        url={`${product.image}`}
                        key={index}
                        description={product.title}
                        price={`$${product.price}`}
                        salePrice={product.salePrice}
                        title={product.category}
                    />
                )) : <Loader/> }
            </Box>

            <Box
                className='vertical_list_scroll_icon'
                component={'div'}
                position={'absolute'}
                left={'18%'}
                top={'30%'}
                style={{backgroundColor:'#F0F8FF', borderRadius:'50px', opacity:'0.5'}}
            >
                <IconButton onClick={() => scroll('left')}>
                    <KeyboardArrowLeftIcon sx={{ fontSize: '100px' }} />
                </IconButton>
            </Box>

            <Box
                className='vertical_list_scroll_icon'
                component={'div'}
                position={'absolute'}
                right={'18%'}
                top={'30%'}
                style={{backgroundColor:'#F0F8FF', borderRadius:'50px', opacity:'0.5'}}
            >
                <IconButton onClick={() => scroll('right')}>
                    <KeyboardArrowRightIcon sx={{ fontSize: '100px' }} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default VerticalList;
