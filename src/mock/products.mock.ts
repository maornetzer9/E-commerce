import p1 from '../assets/products/p1.png';
import p2 from '../assets/products/p2.png';
import p3 from '../assets/products/p3.png';
import p4 from '../assets/products/p4.png';
import p5 from '../assets/products/p5.png';

export interface IProduct {path: string, mode?: 'hot' | 'sale'};


export const PRODUCTS:IProduct[] = 
[
    {
        path: p1,
        mode : 'hot',  
    },
    {
        path: p2,
        mode : 'sale',  
    },
    {
        path: p3,
    },
    {
        path: p4,
    },
    {
        path: p5,
        mode : 'sale',  
    },
];

