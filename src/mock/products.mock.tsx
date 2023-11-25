import bag from '../assets/products/bag.png';
import dress from '../assets/products/dress.png';
import glasses from '../assets/products/glasses.png';
import hoodies from '../assets/products/hoodies.png';
import pants from '../assets/products/pants.png';
import scarf from '../assets/products/scarf.png';
import shoe from '../assets/products/shoe.png';
import womenHoodies from '../assets/products/p1.png';
import sportJacket from '../assets/products/sportJacket.png';

export interface IProduct {url: string; description: string; price: string; salePrice?: string; title: string};


export const PRODUCTS:IProduct[] = 
[
    {
        url: pants,
        description: 'Adi color Classics joggers',
        price: '$236.00',
        salePrice: '$200',
        title: 'Pants',
    },
    {
        url: bag,
        description: 'Nike Sportswear Futura Luxe',
        price: '$130.00',
        salePrice: '$89.90',
        title: 'Bag',
    },
    {
        url: scarf,
        description: 'Geometric Print Scarf',
        price: '$130.00',
        salePrice: '$110',
        title: 'Scarf',
    },
    {
        url: hoodies,
        description: 'Yellow Reserved Hoodies',
        price: '$198.00',
        salePrice: '$220',
        title: 'Hoodies',
    },
    {
        url: dress,
        description: 'Basic Dress Green',
        price: '$150.00',
        salePrice: '$120',
        title: 'Dress',
    },
    {
        url: shoe,
        description: 'Nike Air Zoom Pegasus',
        price: '$198.00',
        salePrice: '$129.90',
        title: 'Shoe',
    },
    {
        url: sportJacket,
        description: 'Nike Repel Miler',
        price: '$120.50',
        salePrice: '',
        title: 'Sport Jacket',
    },
    {
        url: glasses,
        description: 'Nike Sportswear Futura Luxe',
        price: '$160.00',
        salePrice: '$139.90',
        title: 'glasses',
    },
];

