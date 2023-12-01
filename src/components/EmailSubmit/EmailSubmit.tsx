import { Box, TextField } from '@mui/material'
import { EMAIL_SUBMIT_IMAGES } from '../../mock/emailSubmit.mock'
import Typography from '@mui/material/Typography'
import React from 'react'
import ImageModel from '../ImageModel/ImageModel'
import ButtonModel from '../ButtonModel/ButtonModel'
import './style.css'

const EmailSubmit: React.FunctionComponent = () => {

    const button = 
    {
        fontFamily: 'revert',
        fontWeight: 'lighter',
        width: '120px',
        height: '40px',
        backgroundColor: '#eeeeee',
        fontSize: '16px',
        color: 'gray',
        boxShadow: 'none',
        borderBottom: '2px solid black',
      };
      
    
    return (
        <Box
            component={'div'}
            className='form_container'
            style={{ background: '#eeeeee' }}
        >
            <Typography
                fontWeight={'bold'}
                fontSize={'45px'}
                variant='h3'
            >
                Follow Products And Discounts On Instagram
            </Typography>

            {EMAIL_SUBMIT_IMAGES.map((image, index) => {
                return (
                    <Box
                        key={index}
                        component={'div'}
                        className='form_images_container'
                    >
                        <ImageModel
                            id='emailSubmit_responsive_image'
                            key={index}
                            preview={true}
                            url={image.url}
                            styles={{ height: '200px', width: '200px'}}
                        />
                    </Box>
                )
            })}
            <Box
                component={'div'}
                className='form_sub_header_container'
            >
                <Typography
                    variant='h3'
                    fontSize={'45px'}
                    fontWeight={'bold'}
                >
                    Or Subscribe To The Newsletter
                </Typography>
                <Box
                    component={'div'}
                    className='form_submit_inner_container'
                >
                    <TextField
                        type='text'
                        variant='standard'
                        placeholder='Email Address... '
                        sx={{
                            borderBottom: '1px solid black',
                            width: '70%',
                            display: 'flex',
                        }} />

                    <ButtonModel
                        sx={{ 
                            fontFamily: button.fontFamily,
                            fontWeight:button.fontWeight,
                            fontSize:button.fontSize,
                            width : button.width,
                            height:button.height,
                            backgroundColor:button.backgroundColor,
                            color:button.color,
                            boxShadow:button.boxShadow,
                            borderBottom: button.borderBottom,
                            '&:hover': { color: '#FF6F61', backgroundColor: '#eeeeee', borderBottom: '2px solid #FF6F61', boxShadow: 'none' } }}
                    >
                        Submit
                    </ButtonModel>
                </Box>
            </Box>

        </Box>
    )
}

export default EmailSubmit
