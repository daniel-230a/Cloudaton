import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { Fragment, useState } from 'react';
import { CTAButton, CTAButton2, LinkText } from '../assets/ReusableComponents';
import main_theme from '../assets/theme';
import logo from '../assets/logo/cloudaton.png' 
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Header = styled(AppBar, {})({
    ...main_theme.palette.secondary
});

const BarContent = styled(Toolbar, {})({
    display: 'flex',
    justifyContent: 'space-between',

});

const HideableBox = styled(Toolbar, {})({
    display: 'flex',
    [main_theme.breakpoints.down('sm')]: {
        display: 'none',
    },
});

export const LogoText = styled(Typography, {})({
    ...main_theme.typography.bold.primary,
    marginTop: '0.5rem',
    [main_theme.breakpoints.down('sm')]: {
        display: 'none',
    },
});

export const LogoIcon = styled(Avatar, {})({
    width: 56, 
    height: 56, 
    margin: 1,
});


const Navbar = ({ logout, isAuthenticated, user }) => {

    const guestLinks = () => (
        <Fragment>
            <LinkText to='/login'>
                <CTAButton
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Login
                </CTAButton>
            </LinkText>
            <LinkText to='/signup'>
                <CTAButton2
                    type="submit"
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Sign Up
                </CTAButton2>
            </LinkText>
        </Fragment>
    );

    const authLinks = () => (
        
        <CTAButton
            fullWidth
            variant="contained"
            onClick={logout}
            sx={{ mt: 3, mb: 2 }}
            >
            {user?.name}
        </CTAButton>                
    );

    return (
        <Header elevation={0}>
            <BarContent>
                <Box style={{ display: 'flex', marginTop: '1rem' }}> 
                    <LinkText to='/'>
                        <LogoIcon 
                            alt="Cloudaton" 
                            src={logo}
                        />
                    </LinkText>
                    <LinkText to='/'>
                        <LogoText variant="h4">
                            Cloudaton
                        </LogoText>
                    </LinkText>
                </Box>
                <HideableBox> 
                    {isAuthenticated ? authLinks() : guestLinks()}
                </HideableBox>
            </BarContent> 
        </Header>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, { logout })(Navbar);