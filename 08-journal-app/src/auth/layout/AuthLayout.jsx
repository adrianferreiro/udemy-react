import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({children, title = ''}) => {
  return (
    <Grid 
    container 
    spacing={0} //para que no haya espacio entre los hijos
    direction="column" //flexbox
    alignItems="center"
    justifyContent="center"
    sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
    //como un stayle para el tamaño de la pantalla
    //con sx tenemos acceso al tema que definimos en nuestro themeProvider
   >

        <Grid 
        item 
        className="box-shadow" //styles.css
        xs={3} //en pantallas pequeñas va a tener 3 posiciones
        sx={{
            width: {sm: 450}, //ponemos que el width en pantallas small va a ser de 45 px. (Porque se estira mucho el formulario lo adaptamos)
            backgroundColor: 'white',
            padding: 3,
            borderRadius:2}}
        >
        {/* mb: margin button */}
            <Typography variant="h5" sx={{mb:1}}>{title}</Typography>
            {children}
        </Grid>
    </Grid>
  )
}
