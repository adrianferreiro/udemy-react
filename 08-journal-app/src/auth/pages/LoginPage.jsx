import {Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

export const LoginPage = () => {
  return (
    // el grid es como un div pero con propiedades
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
    sx={{backgroundColor: 'white', padding: 3, borderRadius:2}}
    >
      {/* mb: margin button */}
      <Typography variant="h5" sx={{mb:1}}>Login</Typography>
      <form>
        {/* container porque va a tener mas de un grid item */}
        <Grid container>
          {/* como boostrap tenemos la pantalla dividida en 12 posiciones */}
          {/* entonces si decimos xs={6} ocupa la mitad de la pantalla*/}
          {/* entonces si decimos xs={12} ocupa toda la pantalla*/}
          {/* xs: para pantalas pequeñas */}
          {/* md: para pantalas medianas (averiguar mas opciones sm md xl)*/}
          {/* sx: extra style - estilo adicional */}
          <Grid item xs={12} md={6} sx={{mt:2}}> 
            <TextField 
              label="Correo" 
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>
          
          <Grid item xs={12} md={6} sx={{mt:2}}>
            <TextField 
              label="Contraseña" 
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}> 
            <Grid item xs={12} sm={6} >
              <Button variant="contained" fullWidth>
                Login
                </Button>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Button variant="contained" fullWidth>
                <Google/>
                <Typography sx={{ml:1}}>Google</Typography>
                </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            {/* incluimos primero link de MUI para darle estilo y despues el de react-router-dom para navegar 
                como los dos tienen el nombre LINK entonces en de react router dom lo importamos así "link as LinkRouter y lo agregamos a component {}"
            */}
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>
      </form>

    </Grid>

   </Grid>
  )
}
