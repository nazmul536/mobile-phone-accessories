import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Explore from '../Explore/Explore'

const explores=[
    {
        key:'1',
        name:'Apple iPhone 12 Pro',
        img:'https://i.ibb.co/m6zWwB8/1-removebg-preview.png',
        color:'Silver, Graphite, Gold & Pacific Blue',
        price:146999,
        rating:5
    },
    {
        key:'2',
        name:'Apple iPhone 12 ',
        img:'https://i.ibb.co/thzLFfy/2-removebg-preview.png',
        color:'Silver, Graphite, Gold & PacBlack, White, Red, Green & Blue',
        price:117999,
        rating:5
    },
    {
        key:'3',
        name:' Apple iPhone 13 Pro',
        img:'https://i.ibb.co/jMDC50T/3-removebg-preview.png',
        color:'Graphite, Gold, Silver & Sierra Blue',
        price:147999,
        rating:5
    },
    {
        key:'4',
        name:'Asus Smartphone for Snapdragon ',
        img:'https://i.ibb.co/jGPw4qh/4.jpg',
        color:'Graphite, Gold, Silver & Sierra Blue',
        price:80000,
        rating:5
    },
    {
        key:'5',
        name:'Asus ROG Phone 3',
        img:'https://i.ibb.co/cxcqQcR/5-removebg-preview.png',
        color:'Black',
        price:54000,
        rating:5
    },
    {
        key:'6',
        name:'Asus Zenfone 7 Pro ZS671KS',
        img:'https://i.ibb.co/kG7J0cz/Asus-Zenfone-7-Pro-details-including-Launch-Date-full-specifications-features-RAM-Internal-Storage-S.jpg',
        color:'Aurora Black & Pastel White',
        price:80000,
        rating:5
    },
    {
        key:'7',
        name:'Amazon Fire HD 10 Plus (2021)',
        img:'https://i.ibb.co/KGr13C5/Amazon-Fire-HD-10-Plus-2021.jpg',
        color:'Slate',
        price:"Comming Soon",
        rating:4
    },
    {
        key:'8',
        name:'Amazon Fire HD 10',
        img:'https://i.ibb.co/2MhNPtC/Amazon-Fire-HD-10-2021.jpg',
        color:'Slate',
        price:"Comming Soon",
        rating:5
    },
    {
        key:'9',
        name:'Amazon Fire HD 10 (2021)',
        img:'https://i.ibb.co/rtQqMsh/Amazon-Fire-HD-10-2019-Price-in-Bangladesh.jpg',
        color:'Black, Plum, Twilight Blue & White',
        price:"Comming Soon",
        rating:5
    },
    {
        key:'10',
        name:'Google Pixel 6 Pro',
        img:'https://i.ibb.co/WyjPckV/10-removebg-preview.png',
        color:'Cloudy White, Sorta Sunny & Stormy Black',
        price:100000,
        rating:5
    },
    {
        key:'11',
        name:'Google Pixel 6',
        img:'https://i.ibb.co/4FVPvWv/11-removebg-preview.png',
        color:'Sorta Seafoam, Kinda Coral & Stormy Black',
        price:65000,
        rating:4
    },
    {
        key:'12',
        name:'Google Pixel 4a 5G',
        img:'https://i.ibb.co/cJzg014/12-removebg-preview.png',
        color:'Just Black',
        price:42000,
        rating:5
    },
    {
        key:'13',
        name:'Gionee G13 Pro',
        img:'https://i.ibb.co/dmRzVCZ/13-removebg-preview.png',
        color:'Black, Blue, Silver & Purple',
        price:'Comming Soon',
        rating:5
    },
    {
        key:'14',
        name:'Gionee K30 Pro',
        img:'https://i.ibb.co/1K8jv8p/14-removebg-preview.png',
        color:'Black, Blue & White',
        price:12000,
        rating:5
    },
    {
        key:'15',
        name:'Gionee K30 Pro',
        img:'https://i.ibb.co/51gw5sF/15-removebg-preview-1.png',
        color:'Jade Green & Pearl White',
        price:100000,
        rating:5
    },
]



const Explores = () => {
    return (
        <div>
             <Box sx={{ flexGrow: 1 }}>
             <Typography sx={{fontWeight:600, mb:5, mt:5}} variant="h4" gutterBottom component="div">
       Services
      </Typography>
      <Grid container spacing={2}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
         explores.map(explore=><Explore
         key={explore.id}
         explore={explore}
         ></Explore>)
     }
        </Grid>  
      
      </Grid>
    </Box>
        </div>
    );
};

export default Explores;