import React from 'react'
import { Box, Button } from '@mui/material'
import { BiSolidFilterAlt } from "react-icons/bi";

interface Props { text?: string; styles?:React.CSSProperties } 

const FilterController: React.FunctionComponent<Props> = ({text, styles }) => {
    return (
        <Box component={'div'} style={{ margin: '2%' }}>
            <Box
                component={'div'}
                sx={{
                    position: 'absolute',
                    left: '17%',
                }}
            >
                <Button
                    style={{
                        backgroundColor: 'transparent',
                        color: ' gray',
                        fontWeight: 'bold',
                        border: 'none'
                    }}
                    variant='outlined'
                    color='primary'
                >  All Products
                </Button>
                <Button
                    style={{
                        backgroundColor: 'transparent',
                        color: ' gray',
                        fontWeight: 'bold',
                        border: 'none'
                    }}
                >  T-Shirt
                </Button>
                <Button
                    style={{
                        backgroundColor: 'transparent',
                        color: ' gray',
                        fontWeight: 'bold',
                        border: 'none'
                    }}
                    variant='outlined'
                >  Hoodies
                </Button>
                <Button
                    style={{
                        backgroundColor: 'transparent',
                        color: ' gray',
                        fontWeight: 'bold',
                        border: 'none'
                    }}
                    color='primary'
                >  Jacket
                </Button>
            </Box>
            <Button
                style={{ backgroundColor: '#1E2832' }}
                sx={{ position: 'relative', marginLeft: '64%' }}
                variant='contained'
                color='warning'
            >
                <BiSolidFilterAlt /> Filter
            </Button>
        </Box>
    )
}


export default FilterController