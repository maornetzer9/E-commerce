import { Box } from '@mui/material'
import React from 'react'
import { LOGOS } from '../../mock/logos.mock'
import ImageModel from '../ImageModel/ImageModel'
import './style.css'
import '../../animations.css'

const Icon:React.FunctionComponent = () => {
  return (
    <Box 
        id='icon_container'
        className='moving-element'
        component={'div'}
    >
        {LOGOS.map((logo, index) =>  <Box key={index}> <ImageModel  url={logo.path} preview={false}/> </Box>)}
    </Box>
  )
}

export default Icon