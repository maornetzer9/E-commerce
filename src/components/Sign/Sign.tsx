import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Typography from '@mui/material/Typography'
import ButtonModel from '../ButtonModel/ButtonModel'
import UserApiRequest from '../../apis/user'
import { Link, useNavigate } from 'react-router-dom'
import signBackground from '../../assets/icons/signIn-Icon.png'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Logo from '../Logo/Logo'
import './style.css'


const Sign: React.FunctionComponent = () => {

    const baseUrl = 'http://localhost:4200/user/sign'
    const [user, setUser] = useState({
        email: '',
        password: ''
    });


    const navigate = useNavigate()
    const handleUser = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, [name]: value });


    const handleSign = async () => {

        const { email, password } = user;
        const homePage = process.env.PUBLIC_URL;

        const response: any = await new UserApiRequest(baseUrl).sign(email, password)

        const { code, message, id } = response

        if (code !== 200) return alert(message)

        localStorage.setItem('id', id);

        navigate(homePage);
    }

    return (
        <Box
            component={'div'}
            id='sign_background'
        >
            <Box
                component={'div'}
                className='sign_icon'
            >
                <Logo url={signBackground} showButton={false} />
            </Box>

            <Box
                id='sign_container'
                component={'div'}
            >
                <Box
                    id='sign_inner_container'
                    component={'div'}
                >
                    <Box
                        component={'div'}
                        width={'100%'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        gap={'10px'}
                    >
                        <ShoppingBasketIcon style={{ fontSize: '50px', color: '#F47458' }} />
                        <Typography
                            variant='h3'
                            color={'white'}
                            fontWeight={'bold'}
                            sx={{
                                fontWeight: 'bold',
                                color: '#F47458',
                            }}
                        > Shop Land
                        </Typography>
                    </Box>
                    <Typography
                        variant='h2'
                        color={'white'}
                        sx={{ color: 'black' }}
                    > Sign in
                    </Typography>

                    <Typography variant='body2'> Email </Typography>
                    <TextField
                        type='email'
                        name='email'
                        variant='standard'
                        className='sign_inputs'
                        placeholder='Enter email'
                        onChange={handleUser}

                    />
                    <Box
                        id='sign_reset_password_container'
                        component={'div'}
                        width={'100%'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        gap={'10px'}
                    >
                        <Typography variant='body2'> Password </Typography>
                        <Link
                            id='sign_reset_password_link'
                            to={'reset_password'}
                        >
                            Forgat Password?
                        </Link>
                    </Box>

                    <TextField
                        type='password'
                        name='password'
                        variant='standard'
                        className='sign_inputs'
                        placeholder='Enter Password'
                        onChange={handleUser}
                    />
                    <Box
                        component={'div'}
                        id='sign_button_container'
                    >
                        <ButtonModel
                            onClick={handleSign}
                            styles={{
                                backgroundColor: '#F47458',
                                display: 'flex',
                                gap: '10px',
                                borderRadius: '20px'
                            }}
                        >
                            {'Sign in'}
                            <ArrowRightAltIcon />
                        </ButtonModel>
                    </Box>
                    <Box
                        component={'div'}
                        width={'100%'}
                        display={'flex'}
                        justifyContent={'center'}
                    >
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}


export default Sign
