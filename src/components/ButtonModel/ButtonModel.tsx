import { Box, Button, SxProps } from '@mui/material'
import React from 'react'

interface ButtonProps { className?: string; id?: string; sx?: SxProps, styles?: React.CSSProperties, onClick?:  ( event: React.MouseEvent<HTMLButtonElement> ) => void }

const ButtonModel: React.FunctionComponent<React.PropsWithChildren<ButtonProps>> = ({ children, id, sx, className, styles, onClick}) => {
    return (
        <Box>
            <Button 
                classes={{}}
                onClick={onClick}
                id={id}
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