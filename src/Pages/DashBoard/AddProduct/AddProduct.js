import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import useAuth from './../../../hooks/useAuth';



const AddProduct = () => {
    const [exploreProducts,setExploreProducts]=useState([])
    // const {user}=useAuth();
    // const product={products};
    console.log( exploreProducts)

    const handleAddProduct=e=>{
      const field=e.target.name;
      const value=e.target.value;
      const newAddProduct={ ...exploreProducts};
      newAddProduct[field]=value;
      setExploreProducts(newAddProduct);
  }

  const ReviewAddProduct=e=>{
    const user={exploreProducts}
    fetch('http://localhost:5000/exploreProducts',{
      method:'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(exploreProducts),
    })
    .then(res=>res.json())
    .then(data=>{
        setExploreProducts('')
      console.log(data)
  })

    e.preventDefault();
  }

    return (
        <Container sx={{margin:'auto'}}>
           
              <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid sx={{mt:8}} item xs={12} md={6}>
          <Typography sx={{fontWeight:600}} variant="h4" gutterBottom>
          Add a Product
        </Typography>
        <form onSubmit={ReviewAddProduct}>
        <TextField 
        sx={{width:'75%', m:1}}
        id="standard-img" 
        label="Image Url"
        type="img"
        name="img"
        onBlur={handleAddProduct}
        variant="standard" />
      <TextField 
        sx={{width:'75%', m:1}}
        id="standard-name" 
        label="Name"
        name="name"
        type="name"
        // defaultValue={user.displayName}
        onBlur={handleAddProduct}
        variant="standard" />
        <br/>

      <TextField
  sx={{width:'75%', m:1}}
          id="standard-textarea"
          label="Description"
          placeholder="Description"
          rows={2}
          name="description"
          type="description"
          onBlur={handleAddProduct}
          multiline
          variant="standard"
        />
         <TextField 
        sx={{width:'75%', m:1}}
        id="standard-number" 
        label="Tk."
        name="price"
        type="number"
        onBlur={handleAddProduct}
        variant="standard" />
      
              <TextField 
        sx={{width:'75%', m:1}}
        id="standard-rating" 
        label="Rating"
        name="rating"
        type="rating"
        onBlur={handleAddProduct}
        variant="standard" />
      
  <br/>

  <Button  sx={{width:'50%', mt:2}} type='submit' variant="contained">Add a Product</Button>


  </form>
    </Grid>
    
  </Grid>
</Box>
        </Container>
     
    );
};

export default AddProduct;