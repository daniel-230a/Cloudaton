import { Box, Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

import ListItemIcon from '@mui/material/ListItemIcon';
import SpeedIcon from '@mui/icons-material/Speed';
import StarIcon from '@mui/icons-material/Star';
import ViewListIcon from '@mui/icons-material/ViewList';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

export const MenuButton = styled(Button, {})({
    backgroundColor: '#F0F0F0',
    borderRadius: '10px',
    padding: '10px 0',
    width: '100%',
    color: '#111',
});

export const NavBarContainer = styled(Container, {})({
    backgroundColor: '#FF931E',
    borderRadius: '15px',
    padding: '20px',
    height: '80vh'
});

const DashboardNav = () => {
    return (
        <NavBarContainer component="main">
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <MenuButton>
                        <ListItemIcon>
                            <SpeedIcon/>
                        </ListItemIcon>                      
                        Dashboard
                    </MenuButton>
                </Grid>
                <Grid item>
                    <MenuButton>
                        <ListItemIcon>
                            <StarIcon/>
                        </ListItemIcon>   
                        Favourites
                    </MenuButton>
                </Grid>
                <Grid item>
                    <MenuButton>
                        <ListItemIcon>
                            <ViewListIcon/>
                        </ListItemIcon>   
                        Job Queue
                    </MenuButton>
                </Grid>
                <Grid item>
                    <MenuButton>
                        <ListItemIcon>
                            <ImageOutlinedIcon/>
                        </ListItemIcon>   
                        Images
                    </MenuButton>
                </Grid>
                <Grid item>
                    <MenuButton>
                        <ListItemIcon>
                            <PhotoAlbumOutlinedIcon/>
                        </ListItemIcon>   
                        Albums
                    </MenuButton>
                </Grid>
                <Grid item>
                    <MenuButton>
                        <ListItemIcon>
                            <CategoryOutlinedIcon/>
                        </ListItemIcon>   
                        Categories
                    </MenuButton>
                </Grid>
            </Grid>
        </NavBarContainer> 
    );
};

export default DashboardNav;