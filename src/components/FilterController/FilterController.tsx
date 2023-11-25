import React, { ReactNode } from 'react'
import { Box, Button } from '@mui/material'
import { BiSolidFilterAlt } from "react-icons/bi";

interface IFilterController { children: ReactNode; styles?: React.CSSProperties; showIcon?: boolean }

const FilterController: React.FunctionComponent<IFilterController> = ({ children, styles, showIcon = true }) => {
    return (
        <Box
            display={'inline-flex'}
            width={'67%'}
            alignItems={'center'}
            justifyContent={'center'}
            marginLeft={2.5}
        >

            <Box
                component={'div'}
                width={600}
                display={'flex'}
                justifyContent={'space-evenly'}
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

            <Box
                component={'div'}
                display={'flex'}
                height={100}
                width={'100%'}
                alignItems={'center'}
                justifyContent={'flex-end'}

            >
                <Box
                    component={'div'}
                    width={'17%'}
                    height={60}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Button
                        sx={{
                            backgroundColor: '#1E2832',
                            textTransform: 'none',
                            borderRadius: '0px',
                        }}
                        variant='contained'
                        color='warning'
                    >
                        <Box
                            style={styles}
                            component={'div'}
                            width={'fit-content'}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            gap={1}
                        >
                            <BiSolidFilterAlt fontSize={19} display={showIcon ? 'flex' : 'none'}/> {children}
                        </Box>

                    </Button>
                </Box>
            </Box>
        </Box>
    )
}


export default FilterController