import React from "react";
import { GoogleMapReact } from "google-map-react";
import { Paper, Typography, useMediaQuery } from '@mateial-ui/core';
import LocationOnOutlinedIcon from "@material-ui/icons/locationOnOutlined";
import { Rating } from "@material-ui/lab/Rating";

import useStyles from './styles';
import { Image } from "@material-ui/icons";

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    
    return (
        <div className="classes.mapContainer">
            <GoogleMapReact>
                bootstrapURLKeys={{ key: 'AIzaSyDBofYLbkqHGxrhHaUMp7zr2B4J9ZE0l0Y'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) =>{
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                onChildClick={(click) => setChildClicked(click)}

                {places?.map((place, i) => {
                    <div className={classes.markerContainer} lat={Number(place.latitude)} lng={Number(place.langitude)} key={i}>
                        {
                            isMobile ? (
                                <LocationOnOutlinedIcon color="primary" font-size="large" />
                            ) : (
                                <Paper elevetion={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" guttorButton>
                                        {place.name}
                                    </Typography>
                                    <Image className={classes.pointer} src={place.photo ? place.photos.images.url : 'https://'} alt={place.name} />
                                    <Rating size="small" value={Number(place.rating)} readOnly />
                                </Paper>
                            )
                        }
                    </div>
                })}
                
            </GoogleMapReact>
        </div>
    );
}

export default Map;
