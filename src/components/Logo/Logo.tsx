import React from 'react'
import ImageModel from '../ImageModel/ImageModel';
import { Box } from '@mui/material'
import ButtonModel from '../ButtonModel/ButtonModel';
import './logo.css'

interface Props { url: string, styles?: React.CSSProperties; showButton?: boolean; className?: string; }

const Logo: React.FunctionComponent<Props> = ({ url, styles, showButton = true }) => {
    return (
        <Box
            component={'div'}
            display={'flex'}
            alignItems={'center'}
            position={'relative'}
            width={'100%'}
        >
            <Box
                component={'div'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'100%'}
                position={'relative'}
            >
                <ImageModel url={url} styles={styles} preview={false} />

                <Box
                    position={'absolute'}
                    top={'78%'}
                    left={'13%'}
                    width={'100%'}
                >
                    <ButtonModel 
                        className='logo_button'
                        children={'See Collection'}
                        sx={{
                            display: showButton ? '' : 'none',
                            height: '75px',
                            width:'250px',
                            alignItems: 'center',
                            color: 'black',
                            backgroundColor: 'white',
                            textTransform:'none',
                            fontFamily:'title-case',
                            fontWeight: 'bold',
                            borderRadius:'0px',
                            transition: 'transform 1.3s ease',
                            fontSize:'29px',
                            '&:hover' : {
                                backgroundColor:'#FF6F61',
                                transform: 'scale(0.9)',
                            }
                        }}
                    />
                </Box>

            </Box>
        </Box>
    )
}


export default Logo;