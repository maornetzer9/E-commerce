import React, { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Product from '../Product/Product';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import UserApiRequest from '../../apis/user';
import './verticalList.css'

interface IVerticalList { image?: string; description?: string; price?: string; salePrice?: string; title?: string; key?: number; category?: string; }

const VerticalList: React.FunctionComponent<IVerticalList> = () => {

    const [products, setProducts] = useState<IVerticalList[]>([]);
    const [leftArrowPosition, setLeftArrowPosition] = useState(0);
    const [rightArrowPosition, setRightArrowPosition] = useState(0);

    // const baseUrl = 'http://localhost:4200/product/E-Commerce' || 'https://maornetzer9.github.io/E-Commerce-Backend/' ;
    const baseUrl =  process.env.NODE_ENV !== "development" ? "https://e-commerce-vpm6.onrender.com/product/E-Commerce" || process.env.NODE_ENV !== "production"  :  'http://localhost:4200/product/E-Commerce' ;


    const getProducts = async () => {
        const response = await new UserApiRequest(baseUrl).getProducts();

        setProducts(response);
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                await getProducts()
            }
            catch (err) {
                console.log('Error Fetching Data:', err);
            }
        }
        fetchData()
    }, [])


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
                { products.length ?  products.map((product, index) => (
                    <Product
                        url={`${product.image}`}
                        key={index}
                        description={product.title}
                        price={`$${product.price}`}
                        salePrice={product.salePrice}
                        title={product.category}
                    />
                )) : null }
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
