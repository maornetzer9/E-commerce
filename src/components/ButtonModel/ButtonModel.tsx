import { Box, Button, SxProps } from '@mui/material'
import { CommonProps } from '@mui/material/OverridableComponent';
import React from 'react'

interface ButtonProps { className?: string; sx?: SxProps, styles?: React.CSSProperties, onClick?:  ( event: React.MouseEvent<HTMLButtonElement> ) => void }

const ButtonModel: React.FunctionComponent<React.PropsWithChildren<ButtonProps>> = ({ children, sx, className, styles, onClick}) => {
    return (
        <Box>
            <Button 
                classes={{}}
                onClick={onClick}
                // className={`${className}`}
                className={className}
                variant='contained'
                size='large'
                style={styles}
                sx={sx}
            >
                {children}
            </Button>
        </Box>
    )
}

export default ButtonModel