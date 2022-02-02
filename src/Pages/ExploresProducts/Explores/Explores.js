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