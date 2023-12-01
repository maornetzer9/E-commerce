import React from 'react'
import Section from '../Section/Section'
import { Box } from '@mui/material'
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

const HomePage: React.FunctionComponent = () => {


    const logo = { marginTop: '5%' };
    const typography = { margin: '5%', height: '0' };
    const galleryListSection = { position: 'absolute', height: '70%', width: '100%' };
    const galleryListHeader = { position: 'absolute', width: '50%', height: '60%', top: '20%', transform: 'rotate(270deg)' };


    return (
        <Box component={'div'} className="App">

            <Section id='1'>   <Navbar />    </Section>
            <Section id='2'>    <Icon />     </Section>

            <Section id='3'>
                <Box sx={galleryListSection}>
                    <Typography
                        variant='h4'
                        sx={galleryListHeader} > EXPLORE NEW AND POPULAR STYLES
                    </Typography>
                </Box>
                <GalleryList />
            </Section>

            <Section id='4'>
                <Typography
                    variant="h3"
                    style={typography} > Or Subscribe To The Newsletter
                </Typography>
                <FilterController children={'Filter'} />
                <ProductsList />
            </Section>

            <Section id='5'>
                <Logo url={zaraLogo} styles={logo} />
            </Section>

            <Section id='6'>
                <Typography
                    variant="h3"
                    style={typography} > Best Sellers
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