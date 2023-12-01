import React from 'react';
import { Box } from '@mui/material';
import CORAL from '../../assets/logos/CORAL.png';
import CORAL2 from '../../assets/logos/CORAL2.png';
import CORAL3 from '../../assets/logos/CORAL3.png';
import linkedin from '../../assets/icons/linkedin.png'
import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png'
import instagram from '../../assets/icons/instagram.png'
import Typography from '@mui/material/Typography';



const Footer: React.FunctionComponent = () => {


    return (
        <Box 
            component={'div'}
            display={'flex'}
            height={'500px'}
            width={'100%'}
            alignItems={'center'}
            justifyContent={'space-evenly'}
        >
            <Box
                component={'div'}
                width={'25%'}
            >
                <Box
                    component={'div'}
                    sx={{ textAlign: 'start' }}
                >
                    <Box
                        height={'100%'}
                        component={'div'}
                        width={'100%'}
                        display={'flex'}
                        flexWrap={'wrap'}
                        gap={3}
                    >
                        <div>
                        <img style={{ marginLeft: '5px' }} src={CORAL2} alt="logo" />
                        <img style={{ marginLeft: '5px' }} src={CORAL} alt="logo" />
                        <img style={{ marginLeft: '5px' }} src={CORAL3} alt="logo" />
                        </div>

                    <p style={{color:'#1E2832'}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ratione sed saepe officia debitis vero minima voluptatem cupiditate modi aliquam.
                    </p>

                    <img style={{ marginLeft: '0px' }} src={facebook} alt="facebook" />
                    <img style={{ marginLeft: '50px' }} src={twitter} alt="twitter" />
                    <img style={{ marginLeft: '50px' }} src={linkedin} alt="linkedin" />
                    <img style={{ marginLeft: '50px' }} src={instagram} alt="instagram" />
                    </Box>
                </Box>
            </Box>

            <Box
                component={'div'}
                display={'flex'}
                gap={20}
            >
                <Box
                    component={'div'}
                    textAlign={'start'}
                    display={'flex'}
                    flexDirection={'column'}
                    gap={2}
                >
                    <Typography
                        variant='h6'
                    >
                        CATALOG
                    </Typography>
                    <Typography variant='body2' color={'#1E2832'} sx={{'&:hover' : {color:'#FF6F61', cursor:'pointer'}}}> Necklaces </Typography>
                    <Typography variant='body2' color={'#1E2832'} sx={{'&:hover' : {color:'#FF6F61', cursor:'pointer'}}}> Hoodies </Typography>
                    <Typography variant='body2' color={'#1E2832'} sx={{'&:hover' : {color:'#FF6F61', cursor:'pointer'}}}> Jewelry Box </Typography>
                    <Typography variant='body2' color={'#1E2832'} sx={{'&:hover' : {color:'#FF6F61', cursor:'pointer'}}}> T-Shirt </Typography>
                    <Typography variant='body2' color={'#1E2832'} sx={{'&:hover' : {color:'#FF6F61', cursor:'pointer'}}}> Jacket </Typography>

                </Box>
                <Box
                    component={'div'}
                    textAlign={'start'}
                    display={'flex'}
                    flexDirection={'column'}
                    gap={2}
                >
                    <Typography
                        variant='h6'
                    >
                        ABOUT US
                    </Typography>
                    <Typography variant='body2' color={'#1E2832'} sx={{'&:hover' : {color:'#FF6F61', cursor:'pointer'}}}> Our Producers </Typography>
                    <Typography variant='body2' color={'#1E2832'} sx={{'&:hover' : {color:'#FF6F61', cursor:'pointer'}}}> Sitemap </Typography>
                    <Typography variant='body2' color={'#1E2832'} sx={{'&:hover' : {color:'#FF6F61', cursor:'pointer'}}}> FAQ </Typography>
                    <Typography variant='body2' color={'#1E2832'} sx={{'&:hover' : {color:'#FF6F61', cursor:'pointer'}}}> About Us </Typography>
                    <Typography variant='body2' color={'#1E2832'} sx={{'&:hover' : {color:'#FF6F61', cursor:'pointer'}}}> Terms & Conditions </Typography>
                </Box>
                <Box
                    component={'div'}
                    textAlign={'start'}
                    display={'flex'}
                    flexDirection={'column'}
                    gap={2}
                >
                    <Typography
                        variant='h6'
                    >
                        CUSTOMER SERVICES
                    </Typography>
                    <Typography variant='body2' color={'#1E2832'} sx={{'&:hover' : {color:'#FF6F61', cursor:'pointer'}}}> Contact Us </Typography>
                    <Typography variant='body2' color={'#1E2832'} sx={{'&:hover' : {color:'#FF6F61', cursor:'pointer'}}}> Track Your Order </Typography>
                    <Typography variant='body2' color={'#1E2832'} sx={{'&:hover' : {color:'#FF6F61', cursor:'pointer'}}}> Product Care & Repair </Typography>
                    <Typography variant='body2' color={'#1E2832'} sx={{'&:hover' : {color:'#FF6F61', cursor:'pointer'}}}> Book An Appointment </Typography>
                    <Typography variant='body2' color={'#1E2832'} sx={{'&:hover' : {color:'#FF6F61', cursor:'pointer'}}}> Shipping & Returns </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer
