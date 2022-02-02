import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';



const Review = (props) => {
    const {name,description,rating} =props.review;
    return (
        <div>
              <Grid sx={{mb:5}} item xs={4} sm={4} md={4}  >
        <Card sx={{ minWidth: 275,border: 0,boxShadow: 0, }}>
        
   <CardContent>
     <Typography sx={{fontWeight:600, color:'green'}} variant="h6" component="div">
      {name}
     </Typography>
     
     <Typography sx={{mx:3, my:2}} variant="body2" color="text.secondary">
     {description}
     </Typography>
     
     <Rating name="read-only" value={rating} readOnly />
     
    
   </CardContent>
   
  
 </Card>
     </Grid>
           
        </div>
    );
};

export default Review;