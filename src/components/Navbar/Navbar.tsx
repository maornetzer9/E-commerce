import React from 'react'
import { Box } from '@mui/material';
import { IoSearchSharp } from "react-icons/io5";
import { MdSupervisorAccount } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";
import banner1 from '../../assets/banners/banner1.png'
import CORAL from '../../assets/logos/CORAL.png'
import CORAL2 from '../../assets/logos/CORAL2.png'
import CORAL3 from '../../assets/logos/CORAL3.png'
import Typography from '@mui/material/Typography';
import ImageModel from '../ImageModel/ImageModel';
import InputModel from '../InputModel/InputModel';
import ButtonModel from '../ButtonModel/ButtonModel';
import Frame from '../../assets/icons/Frame.png'
import './style.css'

const Navbar: React.FunctionComponent = () => {

    const [openSearch, setOpenSearch] = React.useState(false)

    const buttons =
    {
        children: 'Jewelry & Accessories',
        background: 'none',
        color: 'black',
        boxShadow: 'none',
        fontSize: '14px',
        fontWeight: 'bold',
        textTransform: 'none',
    }

    return (
        <Box
            component={'div'}
            id='navbar_container'
            display={'flex'}
            alignItems={'center'}
            flexDirection={'column'}
            gap={1}
        >
            <Box
                width={'70%'}
                id='navbar_logo_container'
            >
                <Box
                    component={'div'}
                    height={'35px'}
                    display={'flex'}
                    alignItems={'center'}
                    width={'15%'}
                >
                    <button 
                        className='navbar_button'
                        onClick={() => setOpenSearch(true)} 
                        >
                             <IoSearchSharp fontSize={25}/>
                    </button>
                    <InputModel onChange={() => { }} isOpen={openSearch} setIsOpen={setOpenSearch} label='Search' />
                </Box>
                <Box
                    component={'div'}
                    id='navbar_logo'
                >
                    <img src={CORAL2} alt="Logo"/>
                    <img src={CORAL}  alt="Logo"/>
                    <img src={CORAL3} alt="Logo"/>
                </Box>
                <Box
                    component={'div'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <ButtonModel
                        sx={{
                            color: buttons.color,
                            boxShadow: buttons.boxShadow,
                            background: buttons.background,
                            textTransform: buttons.textTransform,
                            width:'95px',
                            fontSize: '16px',
                            fontWeight: 'lighter',
                            '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', color: '#FF6F61' }
                        }}>
                        <Box
                            component={'div'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            gap={0.4}
                        >
                            <MdSupervisorAccount /> Account
                        </Box>
                    </ButtonModel>
                    <ButtonModel
                        className='categories_buttons'
                        sx={{
                            color: buttons.color,
                            boxShadow: buttons.boxShadow,
                            background: buttons.background,
                            textTransform: buttons.textTransform,
                            width:'95px',
                            fontSize: '16px',
                            fontWeight: 'lighter',
                            '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', color: '#FF6F61' }
                        }}>
                        <Box
                            component={'div'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            gap={0.4}
                        >
                            <AiFillShopping /> Shopping
                        </Box>
                    </ButtonModel>
                </Box>
            </Box>
            <Box
                id='navbar_categories'
                display={'flex'}
                width={'75%'}
                justifyContent={'space-evenly'}
            >
                <ButtonModel
                    children={'Jewelry & Accessories'}
                    sx={{
                        background: buttons.background,
                        color: buttons.color,
                        boxShadow: buttons.boxShadow,
                        fontSize: buttons.fontSize,
                        fontWeight: buttons.fontWeight,
                        textTransform: buttons.textTransform,
                        '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', color: '#FF6F61' }
                    }}></ButtonModel>
                <ButtonModel
                    children={'Home & Living'}
                    sx={{
                        background: buttons.background,
                        color: buttons.color,
                        boxShadow: buttons.boxShadow,
                        fontSize: buttons.fontSize,
                        fontWeight: buttons.fontWeight,
                        textTransform: buttons.textTransform,
                        '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', color: '#FF6F61' }
                    }}></ButtonModel>
                <ButtonModel
                    children={'Wedding Party'}
                    sx={{
                        background: buttons.background,
                        color: buttons.color,
                        boxShadow: buttons.boxShadow,
                        fontSize: buttons.fontSize,
                        fontWeight: buttons.fontWeight,
                        textTransform: buttons.textTransform,
                        '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', color: '#FF6F61' }
                    }}></ButtonModel>
                <ButtonModel
                    children={'Toys & Entertainment'}
                    sx={{
                        background: buttons.background,
                        color: buttons.color,
                        boxShadow: buttons.boxShadow,
                        fontSize: buttons.fontSize,
                        fontWeight: buttons.fontWeight,
                        textTransform: buttons.textTransform,
                        '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', color: '#FF6F61' }
                    }}></ButtonModel>
                <ButtonModel
                    children={' Art & Collectibles'}
                    sx={{
                        background: buttons.background,
                        color: buttons.color,
                        boxShadow: buttons.boxShadow,
                        fontSize: buttons.fontSize,
                        fontWeight: buttons.fontWeight,
                        textTransform: buttons.textTransform,
                        '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', color: '#FF6F61' }
                    }}></ButtonModel>
                <ButtonModel
                    children={'Craft Supplies & Tools'}
                    sx={{
                        background: buttons.background,
                        color: buttons.color,
                        boxShadow: buttons.boxShadow,
                        fontSize: buttons.fontSize,
                        fontWeight: buttons.fontWeight,
                        textTransform: buttons.textTransform,
                        '&:hover': { backgroundColor: 'transparent', boxShadow: 'none', color: '#FF6F61' }
                    }}></ButtonModel>
            </Box>
            <Box id='navbar_section_container'>
                <Box
                    id='navbar_section_inner_container'
                >
                    <Typography variant='h2'> Collections </Typography>
                    <Typography variant='h4'> You Can Explore Ans Shop Many Different Collection from Various Brands Here. </Typography>
                    <ButtonModel sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        height: '65px',
                        width: '200px',
                        background: '#004766',
                        textTransform: 'none',
                        fontSize: '22px',
                        '&:hover': {
                            transition: '0.5s',
                            backgroundColor: '#FF6F61'
                        }
                    }}>
                        <AiFillShopping /> Shop Now
                    </ButtonModel>
                </Box>

                <Box
                    position={'absolute'}
                    right={0}
                >
                    <ImageModel
                        url={Frame}
                        preview={false}
                        styles={{
                            width: '100%',
                            height: '250px'
                        }} />
                </Box>

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
            </Box>
        </Box>
    )
}

export default Navbar