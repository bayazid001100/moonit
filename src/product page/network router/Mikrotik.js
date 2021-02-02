// import './App.css';
import {Grid} from "@material-ui/core";
import ImageGrid from "../ImageGrid";
import MainImage from '../MainImage';
import Info from '../Info';
import React, {useState} from 'react';

const images = [
  "https://i.pcmag.com/imagery/roundups/0219OyNj03yO1QpqFfgSnWj-1..1594138567.jpg",
  "https://www.startech.com.bd/image/cache/catalog/networking/router/asus/ax1800/ax56u-01-500x500.jpg"
]

const product = {
  title: 'Router',
  description: "asdgyfs ofc quouwe ot flqfoef qfwofe www oeqrgpsdfgq ewor",
  category: 'Router',
}


function Mikrotik() {
  const [selectedImages, setSelectedImages] = useState(0);
  return (
    <>
      <Grid container spacing={2} style={{ maxWidth: 1300, margin: '0 auto'}}>
        <Grid item sm= {1.5} >
          <ImageGrid images={images} onSelect={setSelectedImages}
          selectedImages={selectedImages}/>
        </Grid>

        {/* <Grid item sm={0}>

        </Grid> */}

        <Grid item sm= {4.5} >
          <MainImage src = {images[selectedImages]} />
        </Grid>

        <Grid item sm= {5.5}>
          <Info {...product} />
        </Grid>
      </Grid>
    </>
  );
}

export default Mikrotik;


// style={{paddingRight: '50px'}}