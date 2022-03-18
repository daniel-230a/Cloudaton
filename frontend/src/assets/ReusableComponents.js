import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import main_theme from './theme';

export const CTAButton = styled(Button, {})({
    ...main_theme.button,
    ...main_theme.button.gradient,
    ...main_theme.typography.bold.secondary,
    [main_theme.breakpoints.down('sm')]: {
        padding: '5px 10px',
        marginTop: '5px', 
        marginbottom: '5px',
    },

});

export const CTAButton2 = styled(Button, {})({
    ...main_theme.button,
    ...main_theme.button.default,
    ...main_theme.typography.bold.primary,
    [main_theme.breakpoints.down('sm')]: {
        padding: '5px 10px',
    },

});

export const Title = styled(Typography, {})({
    ...main_theme.typography.bold.primary,
    [main_theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    },
});

export const SubTitle = styled(Typography, {})({
    ...main_theme.typography.default.primary,
    [main_theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    },
});

export const InputField = styled(TextField, {})({
    ...main_theme.textField,
    [main_theme.breakpoints.down('sm')]: {
        margin: 5,
    },
});

export const LinkText = styled(Link, {})({
    ...main_theme.link,
});
  
export const BoldLinkText = styled(Link, {})({
    ...main_theme.typography.bold.primary,
    ...main_theme.link,
});

export const CenteredContainer = styled(Box, {})({
    marginTop: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [main_theme.breakpoints.down('md')]: {
        padding: '0 15px'
    },
});

export const ModuleContainer = styled(Box, {})({
    padding: '20px',
    backgroundColor: '#F0F0F0',
    borderRadius: '10px'
});