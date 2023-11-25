import React from 'react';
import { Box } from '@mui/material';
import GalleryList from './components/GalleryList/GalleryList';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import ProductsList from './components/ProductsList/ProductsList';
import Typography from '@mui/material/Typography';
import FilterController from './components/FilterController/FilterController';
import Icon from './components/Icon/Icon';
import Logo from './components/Logo/Logo';
import zaraLogo from './assets/logos/zaraLogo.png'
import VerticalList from './components/VerticalList/VerticalList';
import EmailSubmit from './components/EmailSubmit/EmailSubmit';
import Footer from './components/Footer/Footer';
import FooterPayment from './components/FooterPayment/FooterPayment';
import './components/ImageHover/style.css'
import './App.css';

const App: React.FunctionComponent = () => {

    const typography = { margin: '5%', height: '0' };
    const logo = { marginTop: '5%' };

    return (
        <Box component={'div'} className="App">

            <Section id='1'>   <Navbar/>    </Section>
            <Section id='2'>    <Icon/>     </Section>
            <Section id='3'> <GalleryList/> </Section>

            <Section id='4'>
                <Typography
                    variant="h3"
                    style={typography}
                >
                    Or Subscribe To The Newsletter
                </Typography>
                <FilterController children={'Filter'}/>
                <ProductsList />
            </Section>

            <Section id='5'> <Logo url={zaraLogo} styles={logo}/> </Section>

            <Section id='6'>
                <Typography
                    variant="h3"
                    style={typography}
                >
                    Best Sellers
                </Typography>
                <FilterController children={'Show All'} showIcon={false}/> 
                <VerticalList />
            </Section>

            <Section id='7'>  <EmailSubmit/>   </Section>
            <Section id='8'>    <Footer/>     </Section>
            <Section id='9'> <FooterPayment/> </Section>

        </Box>
    );
}

export default App;