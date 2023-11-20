import React, { useState } from 'react'
import { Image } from 'antd';
import sale from '../../assets/icons/sale.png'
import hot from '../../assets/icons/hot.png'
import ImageModel from '../ImageModel/ImageModel';
import { Box } from '@mui/material'

interface Props { mode: 'hot' | 'sale' | 'none', path: string };

const GalleryImage: React.FunctionComponent<Props> = ({ mode, path }) => {
    const [imageWidth, setImageWidth] = useState<number | null>(null);
    const [imageHeight, setImageHeight] = useState<number | null>(null);

    // // Function to handle image load
    // const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    //     // Access the naturalWidth property of the loaded image
    //     const width = (event.target as HTMLImageElement).width;
    //     const height = (event.target as HTMLImageElement).height;
    //     setImageWidth(width);
    //     setImageHeight(height);
    //     console.log('Image width:', width);
    //     console.log('Image width:', height);
    // };

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                minWidth: imageWidth + 'px',
                minHeight: imageHeight + 'px',
                position: 'relative',
                padding: 0,
                margin: 0,
            }}
        >
            <div
                style={{
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
                    preview={true}
                />
            </div>

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
                            preview={false}
                            url={mode === 'hot' ? hot : sale}
                        /> 
                    </Box>
                )
            }

        </div>
    )
}

export default GalleryImage;