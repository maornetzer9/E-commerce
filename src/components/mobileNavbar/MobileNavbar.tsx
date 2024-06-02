import React from 'react';
import { FormControl, MenuItem, Select, Box } from '@mui/material';
import { MOBILEDROPDOWN } from '../../mock/dropDown.mock';
import { useNavigate } from 'react-router-dom';
import IconLogo1 from '../../assets/logos/CORAL.png'
import IconLogo2 from '../../assets/logos/CORAL2.png'
import IconLogo3 from '../../assets/logos/CORAL3.png'
import { AiFillShopping } from "react-icons/ai";
import { MdSupervisorAccount } from "react-icons/md";
import ButtonModel from '../ButtonModel/ButtonModel';
import './mobileNavbar.css';

interface MobileNavbarProps { dropdownWidth?: string; value?: string; }

const MobileNavbar: React.FunctionComponent<MobileNavbarProps> = ({ dropdownWidth = '300px', value = MOBILEDROPDOWN[0].options }) => {

    const navigate = useNavigate();
    // const [selectCategory, setSelectCategory] = useState(value);

    // const handleChange = (event: SelectChangeEvent) => setSelectCategory(event.target.value as string);

    return (

        <Box
            id='mobileNavbar_container'
            component={'div'}
        >
            <FormControl>
                <Select
                    id="dropdown"
                    value={value}
                    // onChange={handleChange}
                    sx={{ width: dropdownWidth }}>
                    {MOBILEDROPDOWN.map((option, index) => (
                        <MenuItem
                            key={index}
                            value={option.options}
                            id="mobileNavbar_menuItem"
                            onClick={() => navigate(`/${option.options}`)}
                        >
                            {option.options}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Box
                id='mobileNavbar_logo'
                component={'div'}
            >
                <img src={IconLogo2} alt='logo1'/>
                <img src={IconLogo1} alt='logo2'/>
                <img src={IconLogo3} alt='logo3'/>
            </Box>


            <Box
                id='mobileNavbar_buttons'
                component={'div'}
            >
                <ButtonModel
                    onClick={() => navigate('/user/sign')}
                    id='mobileNavbar_buttons_style'
                >
                    <MdSupervisorAccount />
                    {'Account'}
                </ButtonModel>
                <ButtonModel
                    onClick={() => navigate('/user/cart')}
                    id='mobileNavbar_buttons_style'
                >
                    <AiFillShopping />
                    {'Cart'}
                </ButtonModel>

            </Box>
        </Box>
    );
};

export default MobileNavbar;
