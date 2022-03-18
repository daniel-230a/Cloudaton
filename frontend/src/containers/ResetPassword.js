import React, { useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { CTAButton, Title, InputField, BoldLinkText, CenteredContainer } from '../assets/ReusableComponents';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Navigate to='/' />
    }

    return (
        <Container component="main" maxWidth="xs">
        <CenteredContainer>
          <Title variant="h5">
            Forgot password?
          </Title>
          <Box component="form" onSubmit={e => onSubmit(e)} noValidate sx={{ mt: 1 }}>    
            <InputField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={e => onChange(e)}
              autoFocus
            />  
            <CTAButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Reset Link
            </CTAButton>
            <Grid container spacing={1} align="center">
              <Grid item xs={12} >
                Back to 
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

export default connect(null, { reset_password })(ResetPassword);