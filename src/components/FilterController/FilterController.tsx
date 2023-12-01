import React, { ReactNode } from 'react';
import { Box, Button } from '@mui/material';
import { BiSolidFilterAlt } from 'react-icons/bi';
import './style.css'; // Import the CSS file

interface IFilterController { children: ReactNode; styles?: React.CSSProperties; showIcon?: boolean }

const FilterController: React.FunctionComponent<IFilterController> = ({ children, styles, showIcon = true }) => {
    return (
        <Box
            className="FilterController"
        >
            <Box
                className="ButtonContainer"
            >
                <Button
                    className="ButtonStyle"
                    variant="text"
                    sx={{
                        backgroundColor: 'transparent',
                        color: 'gray',
                        fontWeight: 'bold',
                        border: 'none',
                    }}
                >
                    All Products
                </Button>
                <Button
                    className="ButtonStyle"
                    variant='text'
                    sx={{
                        backgroundColor: 'transparent',
                        color: 'gray',
                        fontWeight: 'bold',
                        border: 'none',
                    }}
                >
                    T-Shirt
                </Button>
                <Button
                    className="ButtonStyle"
                    variant="text"
                    sx={{
                        backgroundColor: 'transparent',
                        color: 'gray',
                        fontWeight: 'bold',
                        border: 'none',
                    }}
                >
                    Hoodies
                </Button>
                <Button
                    className="ButtonStyle"
                    variant='text'
                    sx={{
                        backgroundColor: 'transparent',
                        color: 'gray',
                        fontWeight: 'bold',
                        border: 'none',
                    }}
                >
                    Jacket
                </Button>
            </Box>

            <Box
                id='filter_button'
                className="IconContainer">
                <Button
                    className="FilterButton"
                    variant="contained"
                    sx={{
                        textTransform: 'none',
                        backgroundColor: '#1E2832',
                        '&:hover': {
                            transition: '1s',
                            backgroundColor: '#FF6F61',
                        }
                    }}
                >
                    <Box
                        style={styles}
                        component="div"
                        width="fit-content"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                    >
                        <BiSolidFilterAlt
                            fontSize={19}
                            style={{
                                display: showIcon ? 'flex' : 'none'
                            }}
                        />
                        {children}
                    </Box>
                </Button>
            </Box>
        </Box>
    );
};

export default FilterController;
