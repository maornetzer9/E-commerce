import { Box } from '@mui/material';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import ImageHover from '../ImageHover/ImageHover';

interface Props { url: string; description?: string; price?: string; salePrice?: string; title?: string; }

const Product: React.FunctionComponent<Props> = ({ url, description, price, salePrice, title }) => {

  

    return (
        <Box
            component={'div'}
            className="product-container"
        >
            <Box component={'div'}>
            <ImageHover
                url={url}
                isHovered={false}
                styles={{ height: '350px', width: '300px'}}
            />
            </Box>
            <Box
                className="product-info"
            >
                <Box>
                    <Typography
                        variant="h6"
                        height={'50px'}
                        marginTop={'20px'}
                    >
                        {description}
                    </Typography>
                </Box>
                <Box className="price" >
                    <Typography
                    >
                        {title}
                    </Typography>
                    <Typography
                        className={`salePrice ${salePrice ? 'show' : 'hide'}`}
                    >
                        {salePrice}
                    </Typography>
                    <Typography
                        className='price_style'
                        fontWeight={'bold'}
                    >
                        {price}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Product;
