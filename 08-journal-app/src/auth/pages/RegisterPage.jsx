import {Link as RouterLink} from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';


const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@')  , 'El correo debe tener un @.'], 
  password: [ (value) => value.length >= 6  , 'El password debe tener más de 6 letras.'], 
  displayName: [ (value) => value.length >= 1  , 'El nombre es obligatorio.'], 
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);//para deshabilitar botones

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm( formData, formValidations );

  // console.log(displayNameValid);

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);
    if( !isFormValid ) return;
    // console.log(formState);
    dispatch(startCreatingUserWithEmailPassword(formState));
  }


  return (
      <AuthLayout title='Registro'>

        <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster" >
          {/* container porque va a tener mas de un grid item */}
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}> 
              <TextField 
                label="Nombre completo" 
                type="text"
                placeholder="Nombre completo"
                fullWidth
                name='displayName'
                value={ displayName }
                onChange={ onInputChange }
                error={!!displayNameValid && formSubmitted} //si el dsplayName es valido y si se dispara el formSubmitted
                helperText={displayNameValid}
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
                name='email'
                value={ email }
                onChange={ onInputChange }
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid>
            
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Contraseña" 
                type="password"
                placehold1er="Contraseña"
                fullWidth
                name='password'
                value={ password }
                onChange={ onInputChange }
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>

            <Grid container spacing={2} sx={{mb: 2, mt: 1}}> 
              <Grid 
                item 
                xs={12} 
                display={ !!errorMessage ? '' : 'none' }

              >
                <Alert severity='error' >{ errorMessage }</Alert>
              </Grid>

              <Grid item xs={12} >
                <Button
                  disabled={ isCheckingAuthentication }
                  type='submit'
                  variant="contained"
                  fullWidth>
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
