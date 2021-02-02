import { Grid } from '@material-ui/core'
import React from 'react';

export default function ImageGrid({images = [], onSelect, selectedImages}) {
    return (
        <Grid container direction="column">
            {images.map((image, index) => (
                <img src={image} height={80} 
                onClick = {() => onSelect(index)}
                style={{ border: index === selectedImages ? "solid 1px black" : "solid 1px #eee", 
                        cursor:"pointer"}}/>
            ))}
        </Grid>
    )
}
