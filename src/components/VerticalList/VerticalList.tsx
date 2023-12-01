import React, { useState } from 'react';
import Product from '../Product/Product';
import { Box, IconButton } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { VERTICAL_LIST } from '../../mock/verticalList';
import './verticalList.css'

interface IVerticalList { url?: string; description?: string; price?: string; salePrice?: string; title?: string; key?: number; }

const VerticalList: React.FunctionComponent<IVerticalList> = () => {

    const [leftArrowPosition, setLeftArrowPosition] = useState(0);
    const [rightArrowPosition, setRightArrowPosition] = useState(0);

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
                width={window.innerWidth <= 600 ? '75%' : '66%'}
                sx={{ scrollBehavior: 'smooth' }}
            >
                {VERTICAL_LIST.map((product, index) => (
                    <Product
                        url={product.url}
                        key={index}
                        description={product.description}
                        price={product.price}
                        salePrice={product.salePrice}
                        title={product.title}
                    />
                ))}
            </Box>

            <Box position={'absolute'} left={'17%'} top={'30%'}>
                <IconButton onClick={() => scroll('left')}>
                    <KeyboardArrowLeftIcon sx={{ fontSize: '100px' }} />
                </IconButton>
            </Box>

            <Box position={'absolute'} right={'17%'} top={'30%'} >
                <IconButton onClick={() => scroll('right')}>
                    <KeyboardArrowRightIcon sx={{ fontSize: '100px' }} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default VerticalList;
