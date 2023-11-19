import React, { useState } from 'react'
import { Image } from 'antd';
import  sale  from '../../assets/icons/sale.png'
import  hot  from '../../assets/icons/hot.png'

interface Props { mode: 'hot' | 'sale' | 'none', path: string};

const GalleryImage: React.FunctionComponent<Props> = ({ mode, path }) => {
    const [imageWidth, setImageWidth] = useState<number | null>(null);
    const [imageHeight, setImageHeight] = useState<number | null>(null);

    // Function to handle image load
    const handleImageLoad = (event:React.SyntheticEvent<HTMLImageElement, Event>) => {
      // Access the naturalWidth property of the loaded image
      const width = (event.target as HTMLImageElement).width;
      const height = (event.target as HTMLImageElement).height;
      setImageWidth(width);
      setImageHeight(height);
      console.log('Image width:', width);
      console.log('Image width:', height);
    };

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                minWidth:imageWidth + 'px',
                minHeight:imageHeight + 'px',
                position: 'relative',
                padding: 0,
                margin: 0,
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    minWidth:imageWidth + 'px',
                    minHeight:imageHeight + 'px',
                    position: 'absolute',
                    padding: 0,
                    margin: 0,
                }}
            >
                <Image
                    onLoad={handleImageLoad}
                    src={path}
                    style={{
                        display: 'inline',
                        width: '100%',
                        minHeight: '100%',
                        height:'auto'
                    }}
                />
            </div>
            {
                mode != 'none' && (
                    <Image
                        preview={false}
                        src={mode === 'hot' ? hot : sale}
                        style={{
                            width: '3rem',
                            height: '1rem',
                            position: 'absolute',
                            top: 15,
                            left: 0,
                        }}
                    />
                )
            }
        </div>
    )
}

export default GalleryImage;