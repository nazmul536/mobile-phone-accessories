import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';


const services=[
    {
        key:'1',
        name:'Samsung Galaxy M62',
        img:'https://i.ibb.co/mNB58dG/Samsung-Galaxy-M62-Logo-removebg-preview-removebg-preview.png',
        color:'Blue, Red, White',
        price:34999,
        rating:5
    },
    {
        key:'2',
        name:'Samsung Galaxy F220',
        img:'https://i.ibb.co/PCCNLZX/Samsung-Galaxy-F22-removebg-preview.png',
        color:'Green, Gray, Blue',
        price:18444,
        rating:4
    },
    {
        key:'3',
        name:'Samsung Galaxy Phone A12',
        img:'https://i.ibb.co/fYDxR9v/73c5ea414032ed0f691beea32a843c55-removebg-preview.png',
        price:14186,
        color:'Gray, White, Green',
        rating:2
    },
    {
        key:'4',
        name:'Samsung Galaxy A22',
        img:'https://i.ibb.co/0mh8RrH/1-removebg-preview.png',
        price:20885,
        color:' Red, White',
        rating:4
    },
    {
        key:'5',
        name:'Samsung Galaxy M02',
        img:'https://i.ibb.co/3Cp5n1w/2-removebg-preview.png',
        price:26000,
        color:'Blue, Red, White',
        rating:3
    },
    {
        key:'6',
        name:'Samsung Galaxy A52s ',
        img:'https://i.ibb.co/BNJvnQH/3-removebg-preview.png',
        price:44999,
        color:'Blue, Green, Blue',
        rating:5
    },
]

const Services = () => {
    return (
        <div>
             <Box sx={{ flexGrow: 1 }}>
             <Typography sx={{fontWeight:600, mb:5, mt:5}} variant="h4" gutterBottom component="div">
       Services
      </Typography>
      <Grid container spacing={2}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
         services.map(service=><Service
         key={service.id}
         service={service}
         ></Service>)
     }
        </Grid>  
      
      </Grid>
    </Box>
        </div>
    );
};

export default Services;