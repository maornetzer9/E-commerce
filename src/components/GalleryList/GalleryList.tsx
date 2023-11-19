import React, { useState } from 'react'
import { PRODUCTS } from '../../mock/products.mock'
import GalleryImage from '../GalleryImage/GalleryImage';
import './style.css'
interface Props {}

const GalleryList:React.FunctionComponent<Props> = ({}) => {

    const [products, setProducts] = useState(PRODUCTS);

  return (
    <div id='gallery_list'>

        {products.map((product, index) => {
            return (
                <div key={`gallery_image_${index}`} id={`gallery_image_${index}`}>
                    <GalleryImage mode={product.mode ? product.mode : 'none'} path={product.path}/>
                </div>
            )
        })}

    </div>
  )
}


export default GalleryList;