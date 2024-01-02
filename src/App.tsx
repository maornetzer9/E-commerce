import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Sign from './components/Sign/Sign';
import './components/ImageHover/style.css'
import './components/Sign/sign.css';
import './App.css';

const App: React.FunctionComponent = () => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>

                <Route
                    path='/'
                    element={<HomePage />}
                />
                <Route
                    path='/user/sign'
                    element={<Sign />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;