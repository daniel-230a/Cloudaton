import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { CTAButton, Title, InputField, BoldLinkText, CenteredContainer } from '../assets/ReusableComponents';

const Signup = () => {
    return (
        <Container component="main" maxWidth="xs">
        <CenteredContainer>
          <Title variant="h5">
            Sign Up
          </Title>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <InputField
                margin="normal"
                autoComplete="given-name"
                name="Name"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
            />            
            <InputField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <InputField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <InputField
              margin="normal"
              required
              fullWidth
              name="re-password"
              label="Retype Password"
              type="password"
              id="re-password"
            />           
            <CTAButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </CTAButton>
            <Grid container spacing={1} align="center">
              <Grid item xs={12} >
                Have an account? 
                <BoldLinkText to='/login'>
                    Login
                </BoldLinkText>
              </Grid>
            </Grid>
          </Box>
        </CenteredContainer>
      </Container>
    );
};

export default Signup;