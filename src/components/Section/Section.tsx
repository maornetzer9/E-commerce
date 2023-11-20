import React from 'react'
import { Box } from '@mui/material'

const Section: React.FunctionComponent<React.PropsWithChildren & { id: string }> = ({ children, id }) => {

    return (
        <Box
            component={'div'}
            id={id}
            sx={{
                minHeight: '300px',
                minWidth: window.innerWidth,
            }}
        >
            {children}
        </Box>
    )
}

export default Section
