import {createTheme} from "@mui/material";
import {grey} from "@mui/material/colors";

export const theme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontFamily: ['Poppins', 'Arial', 'sans-serif'].join(',')
                },
                h1: {
                    fontSize: '3rem',
                    fontWeight: 'bold',

                },
                h2: {
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                },
                h3: {
                    fontSize: '2rem',
                    fontWeight: 'bold',
                },
                body1: {
                    fontSize: '1rem',
                },
                body2: {
                    fontSize: '0.8rem',
                },
            },
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    color: grey[500],
                    fontSize: '1rem',
                    fontWeight: 'bold'
                }
            }
        }
    },
    palette: {
        primary: {
            main: '#007cbf'
        },
        secondary: {
            main: '#f2ec9b'
        }
    }
})