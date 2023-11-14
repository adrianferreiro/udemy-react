import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    //tiene un tema por defecto pero sobre escribimos lo que queremos
    //por ejemplo la paleta
    palette:{
        primary: {
            main: '#262254'
        },
        secondary:{
            main: '#543884'
        },
        blanco:{
            main: '#FFFFFF'

        },
        error: {
            main: red.A400
        }
    }
});