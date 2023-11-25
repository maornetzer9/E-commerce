import React, { useRef } from 'react'
import { Box, TextField } from '@mui/material'
import "../../animations.css"


interface Props { onChange?: () => void; isOpen?: boolean, setIsOpen: (isOpen: boolean) => void; label: string };

const InputModel: React.FunctionComponent<Props> = ({ onChange, isOpen, setIsOpen, label }) => {
    const ref = useRef<HTMLInputElement | null>(null)

    const handleCloseInput = () => {
        const inputElement = ref.current?.querySelector('input');
        if (document.activeElement === inputElement) return;
        setIsOpen(false)
    }

    return (
        <Box onMouseLeave={handleCloseInput} component={'div'} className='fade-in' sx={{
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100%',
        }}>
            <TextField sx={{
                marginBottom: '20px',
                display: isOpen ? 'inline-flex' : 'none'
            }} id="standard-basic" label={label} variant="standard" ref={ref}
                onChange={onChange} />

        </Box>
    )
}

export default InputModel
