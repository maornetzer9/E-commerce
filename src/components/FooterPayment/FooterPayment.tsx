import React from 'react'
import { Box } from '@mui/material'
import ImageModel from '../ImageModel/ImageModel'
import Typography from '@mui/material/Typography'
import paymentIcon from '../../assets/icons/icons_payment 1.png'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { animateScroll, Link } from 'react-scroll'


const FooterPayment: React.FunctionComponent = () => {

    const scroll = () => animateScroll.scrollToTop({duration: 1000, smooth: 'easeInOutQuad' });        

    return (
        <Box
            component={'div'}
            sx={{ backgroundColor: '#1E2832' }}
        >
            <Box
                component={'div'}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems:'center',
                    height: '40px',
                    color: 'white',
                }}
            >
                <Typography> 2022 Coral , Inc. </Typography>

                <Box
                    component={'div'}
                >
                    <ImageModel
                        url={paymentIcon}
                        preview={false}
                        styles={{
                            width:'300px',
                            height:'20px',
                        }}
                    />
                </Box>
                    
              <Link to='1' smooth={true} duration={1000}> 
                 <Typography sx={{display:'flex', alignItems:'center', gap:'5px', cursor:'pointer'}} onClick={scroll}
                 > 
                    Scroll To Top 
                    <ArrowUpwardIcon style={{fontSize:'18px'}}/> 
                </Typography> 
            </Link>
            </Box>
        </Box>
    )
}


export default FooterPayment