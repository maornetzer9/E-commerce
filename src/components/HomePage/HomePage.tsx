import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Section from '../Section/Section'
import Typography from '@mui/material/Typography';
import GalleryList from '../GalleryList/GalleryList';
import FilterController from '../FilterController/FilterController';
import ProductsList from '../ProductsList/ProductsList';
import Logo from '../Logo/Logo';
import zaraLogo from '../../assets/logos/zaraLogo.png'
import VerticalList from '../VerticalList/VerticalList';
import Navbar from '../Navbar/Navbar';
import Icon from '../Icon/Icon';
import EmailSubmit from '../EmailSubmit/EmailSubmit';
import Footer from '../Footer/Footer';
import FooterPayment from '../FooterPayment/FooterPayment';
import MobileNavbar from '../mobileNavbar/MobileNavbar';
import './homePage.css'

const HomePage: React.FunctionComponent = () => {

    const [mobileMode, setMobileMode] = useState(window.innerWidth <= 600);

    const handleResize = () => setMobileMode(window.matchMedia('(max-width: 600px)').matches);

    useEffect(() => { window.addEventListener('resize', handleResize) }, []);

    return (
        <Box component={'div'} className="App">
            { mobileMode ?
                (
                    <Section id='1'> <MobileNavbar dropdownWidth="300px" /> </Section>
                )
                : (<Section id='2'> <Navbar /> </Section>)
            }
            <Section id='3'>  <Icon />  </Section>

            <Section id='4'>
                <Box id='gallery-list-section'>
                    <Typography
                        variant='h4'
                        className='gallery-list-header'
                    > EXPLORE NEW AND POPULAR STYLES
                    </Typography>
                </Box>
                <GalleryList />
            </Section>

            <Section id='5'>
                <Typography
                    marginTop={3}
                    marginBottom={3}
                    variant="h3"
                    className='products_list_section'
                > Or Subscribe To The Newsletter
                </Typography>
                <FilterController children={'Filter'} />
                <ProductsList />
            </Section>

            <Section id='6' sx={{ marginTop: '50px' }}>
                <Logo url={zaraLogo} className='logo' />
            </Section>

            <Section id='7'>
                <Typography
                    marginTop={3}
                    marginBottom={3}
                    variant="h3"
                    className='products_list_section'
                > Best Sellers
                </Typography>
                <FilterController children={'Show All'} showIcon={false} />
                <VerticalList />
            </Section>

            <Section id='8'>  <EmailSubmit />   </Section>
            <Section id='9'>    <Footer />     </Section>
            <Section id='10'> <FooterPayment /> </Section>

        </Box>)
}


export default HomePage