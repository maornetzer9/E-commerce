import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Input, Typography } from '@mui/material';
import ImageModel from '../ImageModel/ImageModel';
import SizeSelector from '../Size-Selector/SizeSelector';
import './popupModal.css'

interface PopupProp {
    closePopup?: () => void;
    popupStatus: boolean;
    url?: string;
    title?: string;
    description?: string;
    salePrice?: string;
    price?: string;
}

interface Purchase {
    url: string | undefined;
    price: string | undefined;
    salePrice: string | undefined;
    title: string | undefined;
    productSize: string;
    aMountProduct: number;
}

const PopupModal: React.FunctionComponent<PopupProp> = ({ popupStatus = false, closePopup = () => { }, title, description, salePrice, price, url }) => {

    const popupModalRef = useRef<HTMLDivElement>(null);
    const [aMountProduct, setAmountProduct] = useState<number>(0);
    const [productSize, setProductSize] = useState<string>('');
    const [ purchase, setPurchase ] = useState([{
        url,
        price,
        salePrice,
        title,
        productSize,
        aMountProduct
    }]);

    const handleClosePopup = (event: MouseEvent) => {
        if (popupModalRef.current && !popupModalRef.current.contains(event.target as Node)) {
            closePopup()
        }
    }

    const handleDecreaseAmount = () => setAmountProduct(prevAmount => Math.max(prevAmount - 1, 0));
    const handleIncreaseAmount = () => setAmountProduct(prevAmount => prevAmount + 1);
    const handleProductSize = (size: string) => setProductSize(size);
    
    // TODO : Fix purchases and add to the cart the product with all his details. 
    const handlePurchaseProduct = ( url: string ) => {
        // setPurchase((prevPurchases) => [...prevPurchases, url: string ])
    }

    useEffect(() => {
        popupStatus
            ? document.addEventListener('mousedown', handleClosePopup)
            : document.removeEventListener('mousedown', handleClosePopup)
        return () => document.removeEventListener('mousedown', handleClosePopup);

        // eslint-disable-next-line
    }, [popupStatus])

    return (
        <Box>
            {popupStatus ?
                <Box
                    className="modal"
                >
                    <Box
                        className="modal-content"
                        ref={popupModalRef}
                    >
                        <Box
                            component={'div'}
                            margin={'auto'}
                        >
                            <ImageModel
                                url={url}
                                preview={false}
                                styles={{ height: '200px', width: '100%' }}
                            />
                        </Box>

                        <Typography variant='h4'>       {title}        </Typography>
                        <Typography variant='h6'>       {description}  </Typography>
                        <Typography variant='body2'>    {salePrice}    </Typography>
                        <Typography variant='body2'>    {price}        </Typography>


                        <Button
                            variant='contained'
                            component={'button'}
                            fullWidth={false}
                        >
                            Add To Cart
                        </Button>

                        <Box component={'div'} className='aMount-container'>
                            <Button
                                onClick={handleIncreaseAmount}
                                fullWidth={false}
                                variant='contained'
                                component={'button'}
                                style={{ background: '#01313b' }}
                            >
                                +
                            </Button>
                            <Input
                                value={` ${aMountProduct}`}
                                style={{ width: '20px' }}
                            />
                            <Button
                                onClick={handleDecreaseAmount}
                                fullWidth={false}
                                variant='contained'
                                component={'button'}
                                style={{ background: '#01313b' }}
                            >
                                -
                            </Button>
                        </Box>

                        <SizeSelector handleProductSize={handleProductSize} />

                    </Box>
                </Box>
                : null}
        </Box>
    );
}

export default PopupModal;