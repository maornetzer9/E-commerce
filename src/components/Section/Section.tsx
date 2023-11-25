import React from 'react'
import { Box, SxProps } from '@mui/material'

interface Props { id: string; sx?: SxProps; className?: string }

const Section: React.FunctionComponent<React.PropsWithChildren<Props>> = ({ children, id, sx, className }) => {

    return (
        <Box
            id={id}
            sx={sx}
            className={className}
            component={'div'}
        >
            {children}
        </Box>
    )
}

export default Section
