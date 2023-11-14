import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Button, Container, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";
import tuImagen from "../../img/empresa.jpg";

export const NavBar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        position: 'relative', // Asegúrate de que el AppBar tenga posición relativa
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${tuImagen})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{
            mr: 2,
            display: { sm: 'none' },
          }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid container alignContent="space-between" direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" noWrap component="div">
            JournalApp
          </Typography>
          <Grid>
            <Button color="blanco" variant="outlined">
              Principal
            </Button>
            <Button color="blanco" variant="outlined">
              Galería
            </Button>
            <Button color="blanco" variant="outlined">
              Portafolio
            </Button>
          </Grid>

          <IconButton color="error" onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>

      <Grid height={300}></Grid>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item>
          <Typography style={{ fontWeight: 'bold' }} variant="h2" noWrap component="div">
            Ejemplo de texto ...
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="primary" style={{ fontWeight: 'bold' }} variant="h2" noWrap component="div">
            & Slogan
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};



// import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
// import { AppBar, Button, Container, Grid, IconButton, TableContainer, Toolbar, Typography } from "@mui/material"
// import { useDispatch } from "react-redux"
// import { startLogout } from "../../store/auth/thunks";
// import tuImagen from "../../img/empresa.jpg";

// export const NavBar = ({drawerWidth = 240}) => {

//     const dispatch = useDispatch();

//     const onLogout = () => {
//         dispatch( startLogout() );
//     }

//   return (
//     // position fixed - siempre va a estar en una posición fija
//     <AppBar 
//         position='fixed'
//         sx={{ 
//             width: { sm: `calc(100% - ${ drawerWidth }px)` },
//             ml: { sm: `${ drawerWidth }px` },
//             backgroundImage: `url(${tuImagen})`, //
//                 backgroundSize: 'cover', 
//                 backgroundPosition: 'center',
//         }}
//     >
//         <Toolbar>
//             <IconButton
//                 color="inherit"
//                 edge= "start"
//                 sx={{
//                     mr:2,
//                     display: {sm: 'none'} //el boton hamburguesa desaparece cuando es pantalla pequeña
//                 }}
//             >
//                 <MenuOutlined/>
//             </IconButton>

//             <Grid container direction='row' justifyContent='space-between' alignItems='center'>
//                 <Typography variant="h6" noWrap component='div' >JournalApp</Typography>
//                 <Grid>
//                     <Button color="primary" variant="text">Principal</Button>
//                     <Button color="primary" variant="text">Galería</Button>
//                     <Button color="primary" variant="text">Portafolio</Button>
//                 </Grid>
                
//                 <IconButton 
//                     color="error"
//                     onClick={ onLogout }
//                 >
//                     <LogoutOutlined/>
//                 </IconButton>

//             </Grid>

//         </Toolbar>
//         <Grid height={300} ></Grid>
//         <Grid container direction='row' justifyContent='center' alignItems='center'>
//             <Grid item>
//                 <Typography style={{fontWeight: 'bold'}} variant="h2" noWrap component='div' >Ejemplo de texto ...</Typography>
//             </Grid>
//             <Grid item>
//                 <Typography color="primary" style={{fontWeight: 'bold'}} variant="h2" noWrap component='div' > & Slogan</Typography>
//             </Grid>

//         </Grid>

//     </AppBar>
//   )
// }
