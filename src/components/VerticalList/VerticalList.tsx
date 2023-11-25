import React, { useState } from 'react';
import Product from '../Product/Product';
import { Box, IconButton } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { VERTICAL_LIST } from '../../mock/verticalList';

interface IVerticalList { url?: string; description?: string; price?: string; salePrice?: string; title?: string; key?: number; }

const VerticalList: React.FunctionComponent<IVerticalList> = () => {

    const [leftArrowPosition, setLeftArrowPosition] = useState(0);
    const [rightArrowPosition, setRightArrowPosition] = useState(0);

    const scroll = (direction: 'left' | 'right') => {
        const container = document.getElementById('vertical_list');
        if (container) {
            const scrollAmount = 950;
            if (direction === 'right') {

                container.scrollLeft += scrollAmount;
                setLeftArrowPosition(Math.max(leftArrowPosition - scrollAmount, 0));
            }
            else {
                container.scrollLeft -= scrollAmount;
                setRightArrowPosition(Math.max(rightArrowPosition - scrollAmount, 0));
            }
        }
    };

    return (
        <Box
            component={'div'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            position={'relative'}
            height={'500px'}

        >
            <Box
                id="vertical_list"
                component={'div'}
                display={'flex'}
                alignItems={'center'}
                overflow={'hidden'}
                gap={2}
                width={'66%'}
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
