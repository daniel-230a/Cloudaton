import { Container, CssBaseline, Grid } from '@mui/material';
import React from 'react';
import { Title, SubTitle, CTAButton, CenteredContainer } from '../assets/ReusableComponents';
import UploadIcon from '../assets/icons/upload_icon.png' 
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container component="main"  maxWidth="lg">
            <CenteredContainer>
                <Grid container direction='row' spacing={1} alignItems="center">
                    <Grid item xs={12} sm={9}>
                        <Title variant='h2'> 
                            {'Archive & Organise'}
                        </Title>
                        <SubTitle variant='h2'> 
                            {'Images on the cloud'}
                        </SubTitle>
                    </Grid>
                    <Grid item xs={3}>
                        <img src={UploadIcon} alt="upload" style={{width: '100%'}}/>
                    </Grid>
                    <Grid item xs={12} >
                        <CTAButton
                            component={Link}
                            to='/login'
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            >
                            {'Get Started >>'}
                        </CTAButton>
                    </Grid>
                </Grid> 
            </CenteredContainer>
        </Container>
    );
};

export default Home;