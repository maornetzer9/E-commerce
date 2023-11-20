import p1 from '../assets/products/p1.png';
import p2 from '../assets/products/p2.png';
import p3 from '../assets/products/p3.png';
import p4 from '../assets/products/p4.png';
import p5 from '../assets/products/p5.png';

export interface IProduct {url: string; description: string; price: string; salePrice?: string; title: string};


export const PRODUCTS:IProduct[] = 
[
    {
        url: p1,
        description: 'Product',
        price: '25$',
        salePrice: '10$',
        title: 'Shirt',
    },
    {
        url: p3,
        description: 'Product',
        price: '25$',
        salePrice: '10$',
        title: 'Long Shirt',
    },
    {
        url: p2,
        description: 'Product',
        price: '25$',
        salePrice: '10$',
        title: 'Shoes',
    },
    {
        url: p5,
        description: 'Product',
        price: '25$',
        salePrice: '10$',
        title: 'Classes',
    },
    {
        url: p4,
        description: 'Product',
        price: '25$',
        salePrice: '10$',
        title: 'T-Shirt',
    },
    {
        url: p3,
        description: 'Product',
        price: '25$',
        salePrice: '10$',
        title: 'Jacket',
    },
    {
        url: p1,
        description: 'Product',
        price: '25$',
        salePrice: '10$',
        title: 'Hoodies',
    },
    {
        url: p5,
        description: 'Product',
        price: '25$',
        salePrice: '10$',
        title: 'Earing',
    },
];

