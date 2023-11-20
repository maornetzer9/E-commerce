import React from 'react';
import './App.css';
import GalleryList from './components/GalleryList/GalleryList';
import Logo from './components/Logo/Logo';
import Navbar from './components/Navbar/Navbar';
import ImageModel from './components/ImageModel/ImageModel';
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

            {/* <ImageModel url={'https://images.unsplash.com/photo-1563298723-dcfebaa392e3'} preview={true}/> */}

        </div>
    );
}

export default App;
