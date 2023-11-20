import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { MdSupervisorAccount } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";
import banner1 from '../../assets/banners/banner1.png'
import CORAL from '../../assets/logos/CORAL.png'
import CORAL2 from '../../assets/logos/CORAL2.png'
import CORAL3 from '../../assets/logos/CORAL3.png'
import Button from '../Button/Button'
import './style.css'
import { Box } from '@mui/material';
import ImageModel from '../ImageModel/ImageModel';
import InputModel from '../InputModel/InputModel';

const Navbar: React.FunctionComponent = () => {
    const [openSearch, setOpenSearch] = React.useState(false)

    return (
        <div id='navbar_container'>
            <div id='navbar_logo_container'>
                <button onClick={() => setOpenSearch(true)} className='navbar_button'> <IoSearchSharp fontSize={25}/> </button>
                <InputModel onChange={() => {}} isOpen={openSearch} setIsOpen={setOpenSearch} label='Search'/>
                <div
                    id='navbar_logo'
                >
                    <img
                        src={CORAL2}
                        alt="Logo"
                    />
                    <img
                        src={CORAL}
                        alt="Logo"
                    />
                    <img
                        src={CORAL3}
                        alt="Logo"
                    />
                </div>
                <button className='navbar_button'> <MdSupervisorAccount /> Account  </button>
                <button className='navbar_button'> <AiFillShopping />     Shopping </button>
            </div>
            <div
                id='navbar_categories'
            >
                <button className='navbar_button'>  Jewelry & Accessories  </button>
                <button className='navbar_button'>  Clothing & Shoes       </button>
                <button className='navbar_button'>  Home & Living          </button>
                <button className='navbar_button'>  Wedding Party          </button>
                <button className='navbar_button'>  Toys & Entertainment   </button>
                <button className='navbar_button'>  Art & Collectibles     </button>
                <button className='navbar_button'>  Craft Supplies & Tools </button>
            </div>
            <div id='navbar_section_container'>
                <div
                    id='navbar_section_inner_container'
                >
                    <h1> Collections </h1>
                    <p> You Can Explore Ans Shop Many Different Collection from Various Brands Here. </p>
                    <Button
                        attributes={{ icon: <AiFillShopping /> }}
                        mode='dark'
                        size='medium'
                    >
                        {'Shop Now'}
                    </Button>
                </div>
                <Box
                    component={'div'}
                    sx={{
                        margin: '20px',
                        width: '300px',
                        height: '400px',
                        border: '1px solid gray',
                        borderTopLeftRadius: '35%',
                        borderBottomRightRadius: '35%',
                    }}
                >
                    <Box component={'div'}
                        sx={{
                            margin: '-20px',
                            width: '300px',
                            height: '400px',
                            border: '1px solid gray',
                            borderTopLeftRadius: '35%',
                            borderBottomRightRadius: '35%',
                        }}>
                        <ImageModel url={banner1} preview={false} styles={{
                            borderTopLeftRadius: '35%',
                            borderBottomRightRadius: '35%',
                        }} />
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default Navbar