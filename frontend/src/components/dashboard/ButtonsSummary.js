import { Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { ModuleContainer } from '../../assets/ReusableComponents';

export const ButtonModule = styled(Button, {})({
    backgroundColor: '#fff',
    borderRadius: '10px',
});

const ButtonsSummary = () => {
    return (
        <ModuleContainer component="div">
            <Grid container direction='row' spacing={1} alignItems="center">
                <Grid item xs={4}>
                    <ButtonModule>
                        Images
                    </ButtonModule>
                </Grid>
                <Grid item xs={4}>
                    <ButtonModule>
                        Albums
                    </ButtonModule>
                </Grid>
                <Grid item xs={4}>
                    <ButtonModule>
                        Categories
                    </ButtonModule>
                </Grid>
            </Grid>
        </ModuleContainer> 
    );
};

export default ButtonsSummary;