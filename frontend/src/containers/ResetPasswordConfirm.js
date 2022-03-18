import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { CTAButton, Title, InputField, BoldLinkText, CenteredContainer } from '../assets/ReusableComponents';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;

        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Navigate to='/' />
    }

    return (
        <Container component="main" maxWidth="xs">
        <CenteredContainer>
          <Title variant="h5">
            Reset Password
          </Title>
          <Box component="form" onSubmit={e => onSubmit(e)} noValidate sx={{ mt: 1 }}>    
            <InputField
              margin="normal"
              required
              fullWidth
              name="new_password"
              label="New Password"
              type="password"
              onChange={e => onChange(e)}
            />
            <InputField
              margin="normal"
              required
              fullWidth
              name="re_new_password"
              label="Confirm New Password"
              type="password"
              onChange={e => onChange(e)}
            />    
            <CTAButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </CTAButton>
          </Box>
        </CenteredContainer>
      </Container>        
    );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
