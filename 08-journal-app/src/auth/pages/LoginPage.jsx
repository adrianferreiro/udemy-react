import { useMemo } from 'react'
import {Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { StartGoogleSignInc, startLoginWithEmailPassword } from '../../store/auth/thunks'

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);

  //vamos a memorizar el status para deshabilitar botones
  //siempre se va a obtener el valor cuando cambie el status
  const isAuthenticating = useMemo( ()=> status === 'checking', [status] );

  const {email, password, onInputChange} = useForm({
    email: 'adriferreiro.88@gmail.com',
    password: '123456'
  });

  const onSubmit = ( event ) => {
    event.preventDefault();


    // console.log({ email, password });
    //!! No es ésta la acción a despachar
    dispatch( startLoginWithEmailPassword({ email, password }));
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(StartGoogleSignInc());
  } 

  const dispatch = useDispatch();

  return (
      <AuthLayout title='Login'>
        <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
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
                name='email'
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Contraseña" 
                type="password"
                placehold1er="Contraseña"
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
              />
            </Grid>

            <Grid 
              container 
              display={ !!errorMessage ? '' : 'none' }
              sx={{ mt: 1 }}
            >
                <Grid
                  item
                  xs = { 12 }
                >
                  <Alert severity='error' > { errorMessage } </Alert>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{mb: 2, mt: 1}}> 
              <Grid item xs={12} sm={6} >
                <Button disabled= { isAuthenticating }  type="submit"  variant="contained" fullWidth >
                  Login
                  </Button>
              </Grid>
              <Grid item xs={12} sm={6} >
                <Button
                    disabled= { isAuthenticating }
                    variant="contained"
                    fullWidth
                    onClick={onGoogleSignIn}
                  >
                    
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
