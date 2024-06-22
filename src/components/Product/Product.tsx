import { Box } from '@mui/material';
import React from 'react';
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
                    title={title}
                    description={description}
                    salePrice={salePrice}
                    price={price}
                    isHovered={false}
                />
            </Box>
            <Box
                className="product-info"
            >
                <Box
                    component={'div'}
                >
                    <Typography
                        variant="h6"
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
