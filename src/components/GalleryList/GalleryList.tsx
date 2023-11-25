import React, { useState } from 'react'
import { POPULAR_PRODUCTS } from '../../mock/popular.products.mock'
import GalleryImage from '../GalleryImage/GalleryImage';
import './style.css'
import { Box } from '@mui/material';

/* eslint-disable */
const GalleryList: React.FunctionComponent = ({ }) => {

    const [products, setProducts] = useState(POPULAR_PRODUCTS);

    return (
        <Box component={'div'} id='gallery_list'>
            {products.map((product, index) => {
                return (
                    <Box
                        component={'div'}
                        key={`gallery_image_${index}`}
                        id={`gallery_image_${index}`}
                    >
                        <GalleryImage
                            preview={true}
                            mode={product.mode ? product.mode: 'none'}
                            path={product.path}
                        />
                    </Box>
                )
            })}

        </Box>
    )
}


export default GalleryList;