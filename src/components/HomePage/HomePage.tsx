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
import './style.css'

const HomePage: React.FunctionComponent = () => {

    const [modeMobile, setModeMobile] = useState(window.innerWidth <= 600);



    useEffect(() => {
        const handleResize = () => {
            setModeMobile(window.matchMedia('(max-width: 600px)').matches);
        };

        window.addEventListener('resize', handleResize);

        return () =>  window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Box component={'div'} className="App">
            {modeMobile ? (
                <Section id='1'> <MobileNavbar dropdownWidth="300px" /> </Section>
            ) : (
                <Section id='1'> <Navbar /> </Section>
            )}
            <Section id='2'>    <Icon />     </Section>

            <Section id='3'>
                <Box id='gallery-list-section'>
                    <Typography
                        variant='h4'
                        className='gallery-list-header'
                    > EXPLORE NEW AND POPULAR STYLES
                    </Typography>
                </Box>
                <GalleryList />
            </Section>

            <Section id='4'>
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

            <Section id='5' sx={{ marginTop: '50px' }}>
                <Logo url={zaraLogo} className='logo' />
            </Section>

            <Section id='6'>
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

            <Section id='7'>  <EmailSubmit />   </Section>
            <Section id='8'>    <Footer />     </Section>
            <Section id='9'> <FooterPayment /> </Section>

        </Box>)
}


export default HomePage