import React, { useState } from 'react'
import { POPULAR_PRODUCTS } from '../../mock/popular.products.mock'
import GalleryImage from '../GalleryImage/GalleryImage';
import './style.css'
interface Props { }

const GalleryList: React.FunctionComponent<Props> = ({ }) => {

    const [products, setProducts] = useState(POPULAR_PRODUCTS);

    return (
        <div id='gallery_list'>
            {products.map((product, index) => {
                return (
                    <div
                        key={`gallery_image_${index}`}
                        id={`gallery_image_${index}`}
                    >
                        <GalleryImage
                            preview={true}
                            mode={product.mode ? product.mode: 'none'}
                            path={product.path}
                        />
                    </div>
                )
            })}

        </div>
    )
}


export default GalleryList;