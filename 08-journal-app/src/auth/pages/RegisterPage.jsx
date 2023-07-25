import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
      <AuthLayout title='Registro'>
        <form>
          {/* container porque va a tener mas de un grid item */}
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}> 
              <TextField 
                label="Nombre completo" 
                type="text"
                placeholder="Nombre completo"
                fullWidth
              />
            </Grid>
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
              <Grid item xs={12} >
                <Button variant="contained" fullWidth>
                  Crear cuenta
                  </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              {/* incluimos primero link de MUI para darle estilo y despues el de react-router-dom para navegar 
                  como los dos tienen el nombre LINK entonces en de react router dom lo importamos así "link as LinkRouter y lo agregamos a component {}"
              */}
              <Typography sx={{mr:1}}>
                  ¿Ya tienes cuenta?
              </Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'>
                Ingresar
              </Link>
            </Grid>

          </Grid>
      </form>

      </AuthLayout>
      

  )
}
