import React from 'react';
import './App.css';
import GalleryList from './components/GalleryList/GalleryList';
import Logo from './components/Logo/Logo';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import ProductsList from './components/ProductsList/ProductsList';
import Typography from '@mui/material/Typography';
import FilterController from './components/FilterController/FilterController';

const App: React.FunctionComponent = () => {

    const inlineStyles =
    {
        productsListAppBar: { marginTop: '5%', backgroundColor: 'transparent', color: 'black', boxShadow: 'none', height: '0' },
    };

    return (
        <div className="App">

            <Section id='1'>
                <Navbar />
            </Section>

            {/* <Button mode='dark' size='medium' attributes={{ disabled: true }}> */}

            <Logo />

            <Section id='2'>
                <GalleryList />
            </Section>

            <Section id='3'>
                <Typography
                    variant="h3"
                    margin={'5%'}
                    height={0}
                >
                    Or Subscribe To The Newsletter
                </Typography>
                <FilterController />
                <ProductsList />
            </Section>

        </div>
    );
}

export default App;
