import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


const Explores = (props) => {
    const {name,img,color,price,rating}=props.explore;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{marginTop:'30px', minWidth: 275,border: 0,boxShadow: 0 }}>
            <React.Fragment>
    <CardContent>
    <CardMedia
        component="img"
        style={{
          height:'300px',  
          width:'250px',
          margin:'0 auto'
        }}
        image={img}
        alt="green iguana"
      />
       <Typography variant="h5" sx={{fontWeight:600, margin:'8px 0px'}} component="div">
         {name}
        </Typography>
    
       <Typography variant="h7"  sx={{fontWeight:500, margin:'5px 0px'}}  component="div">
         {color}
        </Typography>

        <Typography component="legend"></Typography>
      <Rating name="read-only" value={rating} readOnly />

       <Typography variant="h6"  sx={{fontWeight:600, color:'red', margin:'5px 0px'}}  component="div">
         ${price}
        </Typography>
    
    </CardContent>
    <Button variant="contained">Buy Now</Button>

  
  </React.Fragment>
            </Card>
        </Grid>
    );
};

export default Explores;