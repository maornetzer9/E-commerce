import React from 'react'
import { Button as AntdButton, ButtonProps } from 'antd'

interface Props { children: React.ReactNode, attributes?: ButtonProps, mode: 'light' | 'dark', size: 'small' | 'medium' | 'large'};


const Button: React.FunctionComponent<Props> = ({ children, attributes, mode, size }) => {
    const backgroundColor = mode === 'dark' ? 'black' : 'white';
    const color = mode === 'dark' ? 'white' : 'black';
    const width = size === 'small' ? '6rem' : size === 'medium' ? '7rem' : '8rem'
    const height = size === 'small' ? '2rem' : size === 'medium' ? '2.5rem' : '3rem'
    const fontSize = size === 'small' ? '0.7rem' : size === 'medium' ? '0.9rem' : '1.3rem';

    return (
        <AntdButton
            style={{
                backgroundColor:backgroundColor,
                color: color, 
                width: width,
                height: height,
                fontSize: fontSize,
            }}
            {...attributes}
        >
            {children}
        </AntdButton>
    )
}

export default Button;
