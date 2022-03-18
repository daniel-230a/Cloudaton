import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../actions/auth';
import { Box, Container, Grid } from '@mui/material';
import { CTAButton, Title, InputField, LinkText, BoldLinkText, CenteredContainer } from '../assets/ReusableComponents';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };
    
    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />
    }

    return (
        <Container component="main" maxWidth="xs">
        <CenteredContainer>
          <Title variant="h5">
            Login
          </Title>
          <Box component="form" onSubmit={e => onSubmit(e)} noValidate sx={{ mt: 1 }}>
            <InputField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={e => onChange(e)}
              autoFocus
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
              onChange={e => onChange(e)}
            />
            <CTAButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </CTAButton>
          </Box>
          <Grid container spacing={1} align="center">
              <Grid item xs={12} >
                Don't have an account? 
                <BoldLinkText to='/signup'>
                    Sign Up
                </BoldLinkText>
              </Grid>
              <Grid item xs={12}>
                <LinkText to='/reset-password'>
                  Forgot password?
                </LinkText>
              </Grid>
            </Grid>
        </CenteredContainer>
      </Container>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);