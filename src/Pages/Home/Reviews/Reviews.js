import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Review from './../Review/Review';
import Typography from '@mui/material/Typography';

const reviews=[
    {
        key:'1',
        name:'Samsung Galaxy M62',
        description:"Wow, Such an amazing Phone, I really sutisfied using this phone",
        rating:5,
    },
    {
        key:'2',
        name:'Samsung Galaxy M02',
        description:"Nice Features and i really pleased",
        rating:5,
    }
]

const Reviews = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
               <Typography sx={{fontWeight:600, color:'green', margin:'3% 0px'}}  variant="h4" component="div">
     Reviews
     </Typography>
      <Grid container spacing={{xs:2, md:2}} columns={{xs:12, md:4, sm:8}}>
       {
           reviews.map(review=><Review
           key={review.id}
           review={review}
           ></Review>)
       }
       
      </Grid>
    </Box>
    );
};

export default Reviews;