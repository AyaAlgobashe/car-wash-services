import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';
import {  Grid } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';
import logo1 from "../assets/logo1.jpeg";
import LocalPhone from '@mui/icons-material/LocalPhone';





function AppBarComponent() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static"
            sx={{
                backgroundColor: "black",
                padding: "1%"
            }}
        >
            <Container>
                <Toolbar disableGutters>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <Box sx={{textAlign:"center"}}>
                                    <img src={logo1} />
                                </Box>
                                {/* <Typography variant='h4'
                                    sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold", color:"rgb(156, 36, 180)" }}>
                                    BDRH</Typography> */}

                            </Box>
                        </Grid>

                        <Grid item xs={8}
                        sx={{ display: { lg: "block", xs: "none" } }}
                        >
                            <Box mt={3.5} sx={{ display: "flex", justifyContent: "space-evenly" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }} >
                                <Box >
                                        <LocalPhone sx={{ color: "rgb(156, 36, 180)" }} />
                                    </Box>
                                    <Typography sx={{ fontWeight: "bold", marginLeft: "5px", color: "white" }}>  <a style={{ textDecoration: "none", color: "white" }} href='tel:+966544379907'>+966 54 437 9907</a></Typography>
                                </Box>
                                <Box mb={3} sx={{
                                    display: "flex",
                                    color: "white"
                                }}>
                                    <Box mt={.5} >
                                        <MailIcon sx={{ color: "rgb(156, 36, 180)" }} />
                                    </Box>
                                    <Typography variant='h6'>
                                        <a style={{ textDecoration: "none", color: "white" }} href='mailto:CeoBdrh@gmail.com'>BdrhAPP</a>

                                    </Typography>
                                </Box>
                                <Box mb={2} sx={{
                            display: "flex",
                            color: "white"
                        }}>
                            <Box >
                                <PlaceIcon sx={{ color: "rgb(156, 36, 180)" }} />
                            </Box>
                            <Typography variant='h7' sx={{fontFamily:"Rubik"}}>
                            المملكة العربية السعودية - الرياض - القيروان
                            </Typography>
                        </Box>
                            </Box>
                        </Grid>
                    </Grid>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default AppBarComponent;
