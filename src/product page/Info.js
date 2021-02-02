import React from 'react';
import { Grid, Typography, Divider, Box } from '@material-ui/core';


export default function Info({ title, description, category }) {
    return (
        <Grid container direction="column" style={{ height: '100%'}}>
            <Typography variant="subtitle1">{category}</Typography>

            <Divider/>
            <Box mt={4}>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="subtitle1">{description}</Typography>
            </Box>
        </Grid>
    )
}
