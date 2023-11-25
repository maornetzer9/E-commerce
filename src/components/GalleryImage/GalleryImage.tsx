import React, { useState } from 'react'
import sale from '../../assets/icons/sale.png'
import hot from '../../assets/icons/hot.png'
import ImageModel from '../ImageModel/ImageModel';
import { Box } from '@mui/material'

interface Props { mode: 'hot' | 'sale' | 'none', path: string, preview: boolean};

/* eslint-disable */
const GalleryImage: React.FunctionComponent<Props> = ({ mode, path, preview }) => {
    
    const [imageWidth, setImageWidth] = useState<number | null>(null);
    const [imageHeight, setImageHeight] = useState<number | null>(null);

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                minWidth: imageWidth + 'px',
                minHeight: imageHeight + 'px',
                position: 'relative',
                padding: 0,
                margin: 0,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    minWidth: imageWidth + 'px',
                    minHeight: imageHeight + 'px',
                    position: 'absolute',
                    padding: 0,
                    margin: 0,
                }}
            >
                <ImageModel
                    url={path}
                    preview={preview}
                />
            </Box>

            {
                mode != 'none' && (
                    <Box
                        component={'div'}
                        sx={{
                            width: '3rem',
                            height: '1rem',
                            position: 'absolute',
                            top: 15,
                            left: 0,
                        }}>
                        <ImageModel
                            preview={preview}
                            url={mode === 'hot' ? hot : sale}
                        /> 
                    </Box>
                )
            }
        </Box>
    )
}

export default GalleryImage;