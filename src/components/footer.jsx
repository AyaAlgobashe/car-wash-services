import { Box, Container, Grid, Typography } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';
import React from 'react'
import logo2 from "../assets/logo2.jpeg";


const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "black", }}>
            <Container >
                <Box p={5} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box>
                        <Box mb={5} sx={{ width: { md: "8vw", xs: "20vw" }, height: "13vh", marginLeft: { md: "15%", xs: "25%" } }} >
                            <img
                                style={{ width: "100%", height: "100%" }}
                                src={logo2} />
                        </Box>
                        <Box mb={3} sx={{
                            display: "flex",
                            color: "white"
                        }}>
                            <Box mr={3}>
                                <LocalPhoneIcon sx={{ color: "rgb(156, 36, 180)" }} />
                            </Box>
                            <Typography variant='h6'>
                            <a style={{ textDecoration: "none", color: "white" }} href='tel:+966544379907'>+966 54 437 9907</a>


                            </Typography>
                        </Box>
                        <Box mb={3} sx={{
                            display: "flex",
                            color: "white"
                        }}>
                            <Box mr={3}>
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
                            <Box mr={3}>
                                <PlaceIcon sx={{ color: "rgb(156, 36, 180)" }} />
                            </Box>
                            <Typography variant='h7' sx={{fontFamily:"Rubik"}}>
                            المملكة العربية السعودية - الرياض - القيروان
                            </Typography>
                        </Box>

                    </Box>

                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: "white"
                }}>
                    <p>
                        Copyright &copy;2024. All rights reserved.
                    </p>
                </Box>
            </Container>


        </Box>
    )
}

export default Footer