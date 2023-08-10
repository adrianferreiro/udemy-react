import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth/thunks";

export const NavBar = ({drawerWidth = 240}) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( startLogout() );
    }

  return (
    // position fixed - siempre va a estar en una posición fija
    <AppBar 
        position='fixed'
        sx={{ 
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }px` }
        }}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                edge= "start"
                sx={{
                    mr:2,
                    display: {sm: 'none'} //el boton hamburguesa desaparece cuando es pantalla pequeña
                }}
            >
                <MenuOutlined/>
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant="h6" noWrap component='div' >JournalApp</Typography>

                <IconButton 
                    color="error"
                    onClick={ onLogout }
                >
                    <LogoutOutlined/>
                </IconButton>

            </Grid>

        </Toolbar>
    </AppBar>
  )
}
