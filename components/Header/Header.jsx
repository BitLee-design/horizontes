import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from '/styles';

const Header = () => {
    const classes = useStyles();
    
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Guia de Viagem turistica
                </Typography>
                <Box display="flex">
                <Typography variant="h6" className={classes.title}>
                    Conheça novos lugares    
                </Typography>
                {/*<Autocomplete>*/}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <inputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }}/>
                    </div>
                {/*</Autocomplete>*/}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
