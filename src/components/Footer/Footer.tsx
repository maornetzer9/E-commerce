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
import { Link } from 'react-router-dom';
import './footer.css'



const Footer: React.FunctionComponent = () => {


    return (
        <Box
            id='footer_container'
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
                        id='footer_inner_container'
                        component={'div'}
                    >
                        <div>
                            <img style={{ marginLeft: '5px' }} src={CORAL2} alt="logo" />
                            <img style={{ marginLeft: '5px' }} src={CORAL} alt="logo" />
                            <img style={{ marginLeft: '5px' }} src={CORAL3} alt="logo" />
                        </div>

                        <p style={{ color: '#1E2832' }}>
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
                id='footer_sections_container'
                component={'div'}
            >
                <Box
                    id='footer_sections'
                    component={'div'}
                >
                    <Typography
                        variant='h6'
                        color={window.innerWidth <= 600 ? '#FF6F61' : 'black'}
                        fontWeight={window.innerWidth <= 600 ? 'bold' : ''}

                    >
                        CATALOG
                    </Typography>
                    <Link to={'/NeckLaces'} style={{ textDecoration: 'none', color: '#1E2832' }}>
                        <Typography variant='body2' sx={{ '&:hover': { color: '#FF6F61', cursor: 'pointer' } }}> Necklaces  </Typography>
                    </Link>
                    <Link to={'/Hoodies'} style={{ textDecoration: 'none', color: '#1E2832' }}>
                        <Typography variant='body2' sx={{ '&:hover': { color: '#FF6F61', cursor: 'pointer' } }}> Hoodies    </Typography>
                    </Link>
                    <Link to={'/Jewelry-Box'} style={{ textDecoration: 'none', color: '#1E2832' }}>
                        <Typography variant='body2' sx={{ '&:hover': { color: '#FF6F61', cursor: 'pointer' } }}> Jewelry Box</Typography>
                    </Link>
                    <Link to={'/T-Shirt'} style={{ textDecoration: 'none', color: '#1E2832' }}>
                        <Typography variant='body2' sx={{ '&:hover': { color: '#FF6F61', cursor: 'pointer' } }}> T-Shirt    </Typography>
                    </Link>
                    <Link to={'/Jacket'} style={{ textDecoration: 'none', color: '#1E2832' }}>
                        <Typography variant='body2' sx={{ '&:hover': { color: '#FF6F61', cursor: 'pointer' } }}> Jacket     </Typography>
                    </Link>

                </Box>
                <Box
                    id='footer_sections'
                    component={'div'}
                >
                    <Typography
                        variant='h6'
                        color={window.innerWidth <= 600 ? '#FF6F61' : 'black'}
                        fontWeight={window.innerWidth <= 600 ? 'bold' : ''}

                    >
                        ABOUT US
                    </Typography>
                    <Link to={'/Our-Producers'} style={{ textDecoration: 'none', color: '#1E2832' }}>
                        <Typography variant='body2' sx={{ '&:hover': { color: '#FF6F61', cursor: 'pointer' } }}> Our Producers </Typography>
                    </Link>
                    <Link to={'/Sitemap'} style={{ textDecoration: 'none', color: '#1E2832' }}>
                        <Typography variant='body2' sx={{ '&:hover': { color: '#FF6F61', cursor: 'pointer' } }}> Sitemap </Typography>
                    </Link>
                    <Link to={'FAQ/'} style={{ textDecoration: 'none', color: '#1E2832' }}>
                        <Typography variant='body2' sx={{ '&:hover': { color: '#FF6F61', cursor: 'pointer' } }}> FAQ </Typography>
                    </Link>
                    <Link to={'/About Us'} style={{ textDecoration: 'none', color: '#1E2832' }}>
                        <Typography variant='body2' sx={{ '&:hover': { color: '#FF6F61', cursor: 'pointer' } }}> About Us </Typography>
                    </Link>
                    <Link to={'/Terms & Condition'} style={{ textDecoration: 'none', color: '#1E2832' }}>
                        <Typography variant='body2' sx={{ '&:hover': { color: '#FF6F61', cursor: 'pointer' } }}> Terms & Conditions </Typography>
                    </Link>
                </Box>
                <Box
                    id='footer_sections'
                    component={'div'}
                >
                    <Typography
                        variant='h6'
                        color={window.innerWidth <= 600 ? '#FF6F61' : 'black'}
                        fontWeight={window.innerWidth <= 600 ? 'bold' : ''}
                    >
                        CUSTOMER SERVICES
                    </Typography>
                    <Link to={'/Contact-Us'} style={{ textDecoration: 'none', color: '#1E2832' }}>
                        <Typography variant='body2' sx={{ '&:hover': { color: '#FF6F61', cursor: 'pointer' } }}> Contact Us            </Typography>
                    </Link>
                    <Link to={'/Track-Your-Order'} style={{ textDecoration: 'none', color: '#1E2832' }}>
                        <Typography variant='body2' sx={{ '&:hover': { color: '#FF6F61', cursor: 'pointer' } }}> Track Your Order      </Typography>
                    </Link>
                    <Link to={'/Product Care & Repair'} style={{ textDecoration: 'none', color: '#1E2832' }}>
                        <Typography variant='body2' sx={{ '&:hover': { color: '#FF6F61', cursor: 'pointer' } }}> Product Care & Repair </Typography>
                    </Link>
                    <Link to={'/Book An-Appointment'} style={{ textDecoration: 'none', color: '#1E2832' }}>
                        <Typography variant='body2' sx={{ '&:hover': { color: '#FF6F61', cursor: 'pointer' } }}> Book An Appointment   </Typography>
                    </Link>
                    <Link to={'/Shipping-Returns'} style={{ textDecoration: 'none', color: '#1E2832' }}>
                        <Typography variant='body2' sx={{ '&:hover': { color: '#FF6F61', cursor: 'pointer' } }}> Shipping & Returns    </Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer
