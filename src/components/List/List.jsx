import React, { useState } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

import { PlaceDetails } from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';
import { type } from "@testing-library/user-event/dist/type";

const List = ({ places, childClicked }) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    console.log({ childClicked });
    
    return (
        <div className="classes.container">
            <Typography variant="h4">Restaurantes, Hoteis e Lugares de Laser</Typography>
            <FormControl className="classes.formControl">
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurantes</MenuItem>
                    <MenuItem value="Hotels">Hoteis</MenuItem>
                    <MenuItem value="attractions">Lugares de Laser</MenuItem>
                </Select>
            </FormControl>
            <FormControl className="classes.formControl">
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value="0">Todos</MenuItem>
                    <MenuItem value="3">Acima de 3.0</MenuItem>
                    <MenuItem value="4">Acima de 4.0</MenuItem>
                    <MenuItem value="5">Acima de 5.0</MenuItem>
                </Select>
            </FormControl>
            <Grid container spcacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={2} xs={12}>
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List;