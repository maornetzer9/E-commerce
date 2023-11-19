import React from 'react';
import './App.css';
import GalleryList from './components/GalleryList/GalleryList';
import Logo from './components/Logo/Logo';
import Navbar from './components/Navbar/Navbar';
console.log(process.env.PUBLIC_URL)
function App() {
    return (
        <div className="App">

            <Navbar/>    

            {/* <Button mode='dark' size='medium' attributes={{ disabled: true }}> */}
                {/* Button */}
            {/* </Button> */}

            <Logo/>
            
            <GalleryList/>

        </div>
    );
}

export default App;
