import { createTheme } from '@mui/material/styles';
import { fontSize } from '@mui/system';

const main_font = 'Gila-Bold';
const main_color = '#F79313';
const secondary_color = '#FFFFFF';


const main_theme = createTheme({
    shadows: ["none"],
    palette: {
        primary: {
            main: main_color,
        },
        secondary: {
            main: secondary_color,
            backgroundColor: secondary_color,
        } 
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        textTransform: 'none',
        borderRadius: '30px',
        
        gradient: {
            color: secondary_color,   
            background: 'linear-gradient(to right, #FF8100ff, #FFB900ff, #FFB100ff, #FF9100ff)',
            backgroundSize: '300%',
            transition: 'all .4s ease-in-out',
            '&:hover': {
                backgroundPosition: '100% 0',
                boxShadow: '0 0 10px 0 rgba(229, 66, 10, 0.75)', 
            }
        },
        default: {
            color: main_color,    
            background: secondary_color,
            '&:hover': {
                boxShadow: '0 0 10px 0 rgba(229, 66, 10, 0.75)', 
            }
        },
    },
    typography: {
        bold: {
            primary: {
                color: main_color,
                fontFamily: main_font,
            },
            secondary: {
                color: secondary_color,
                fontFamily: main_font,
            }
        },
        default: {
            primary: {
                color: main_color,
            },
            secondary: {
                color: secondary_color,
            }
        }
    },
    textField: {
        '& fieldset': {
            borderRadius: '30px',
        },
    },
    link: {
        textDecoration: 'none',
        padding: 5,
        color: main_color,
    }


});

export default main_theme;