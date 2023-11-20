import { Box } from '@mui/material'
import React, { useState } from 'react'
import ImageModel from '../../ImageModel/ImageModel'
import './style.css'

interface Props { url: string; description: string; price: string; salePrice?: number; title: string; }

const Product: React.FunctionComponent<Props> = ({ url, description, price, salePrice, title }) => {

    return (
        <Box component={'div'}>
                <ImageModel 
                    url={url} 
                    preview={false} 
                    styles={{height:'350px', width:'300px'}} 
                /> 
        </Box>
    )
}


export default Product