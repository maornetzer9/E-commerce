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

const Navbar: React.FunctionComponent = () => 
{
    //  TODO
    const search = () => {
        
    }


  return (
    <div id='navbar_container'>
        <div id='navbar_logo_container'>
            <button className='navbar_button'> <IoSearchSharp fontSize={25}/> </button>
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
            <button className='navbar_button'> <MdSupervisorAccount/> Account  </button>
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
                        attributes={{ icon:  <AiFillShopping/> }}
                        mode='dark' 
                        size='medium'
                        >
                        {'Shop Now'}
                    </Button>
                </div>
            <img 
                id='navbar_img'
                src={banner1} 
                alt="banner" 
            />
        </div>
    </div>
  )
}

export default Navbar