import {Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
      <AuthLayout title='Login'>
        <form>
          {/* container porque va a tener mas de un grid item */}
          <Grid container>
            {/* como boostrap tenemos la pantalla dividida en 12 posiciones */}
            {/* entonces si decimos xs={6} ocupa la mitad de la pantalla*/}
            {/* entonces si decimos xs={12} ocupa toda la pantalla*/}
            {/* xs: para pantalas pequeñas */}
            {/* md: para pantalas medianas (averiguar mas opciones sm md xl)*/}
            {/* sx: extra style - estilo adicional */}
            <Grid item xs={12} sx={{mt:2}}> 
              <TextField 
                label="Correo" 
                type="email"
                placeholder="correo@google.com"
                fullWidth
              />
            </Grid>
            
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Contraseña" 
                type="password"
                placehold1er="Contraseña"
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

      </AuthLayout>
      

  )
}
