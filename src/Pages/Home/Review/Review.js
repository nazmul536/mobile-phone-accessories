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
              <Grid item xs={4} sm={4} md={4}>
            <Card sx={{marginTop:'30px', minWidth: 275,border: 0,boxShadow: 0 }}>
            <React.Fragment>
    <CardContent>
   
       <Typography variant="h5" sx={{fontWeight:600, margin:'8px 0px'}} component="div">
         {name}
        </Typography>
    
       <Typography variant="h7"  sx={{fontWeight:500, margin:'5px 15px'}}  component="div">
         {description}
        </Typography>

        <Typography component="legend"></Typography>
      <Rating name="read-only" value={rating} readOnly />

    </CardContent>

  
  </React.Fragment>
            </Card>
        </Grid>
           
        </div>
    );
};

export default Review;