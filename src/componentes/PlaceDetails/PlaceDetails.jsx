import { Place } from "@material-ui/icons";
import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnItem from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icon/Phone';
import Rating from '@material-ui/lab/Rating;'

import useStykes from './styles';

const PlaceDetails = ({ place }) => {
    const classes = useStyles();

    return (
        <Card elevetion={6}>
            <CardMedia 
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : "https://"}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom varient="h5">{place.name}</Typography>
                <Box display={flex} justifyContent="space-between">
                    <Typography variant="subtitle">Price</Typography>
                    <Typography gutterButton variant="subtitle">{Place.price.level}</Typography>
                </Box>
                <Box display={flex} justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterButton variant="subtitle">{Place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box my={1}display={flex} justifyContent="space-between" alignItems="center">
                        <Img src={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cusine?.map(({ name }) => {
                    <Chip key={name} size="small" label={name} className={classes.chip}/>
                })}
                {place?.adress} (e) ({
                    <Typography gotterButtom variant="subtitle2" color="textSecondary" className="classes.subtitle">
                        <LocationOnIcon /> {place.adress}
                    </Typography>
                })
                {place?.phone} (e) ({
                    <Typography gotterButtom variant="subtitle2" color="textSecondary" className="classes_spacing">
                        <PhoneIcon /> {place.phone}
                    </Typography>
                })
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web.url, '_blank')}>
                        Trip Adviser
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
        
    );
}

export default PlaceDetails;