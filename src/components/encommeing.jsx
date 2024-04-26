import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Encommeing = () => {
    return (
        <>
            <Box mb={10}
                sx={{ direction: "rtl" }}>
                <Container>
                    <Box>
                        <Typography variant='h3' sx={{ fontFamily: "Rubik", textAlign: "center" }}>
                            نموذج العمل والإيرادات :

                        </Typography>
                        <Box mt={2} sx={{ marginLeft: { md: "9%" } }}>
                            <hr style={{
                                height: "5px",
    
                                borderBlockColor: "transparent",
                                background: "linear-gradient(to left, rgb(156, 36, 180), #ffb6c1)",
                                width: "35%"
                            
                            }}/></Box>
                    </Box>
                    <Grid container mt={10}>
                        <Grid item xs={12} md={5} mb={5}
                            sx={{ textAlign: { xs: "center", md: "right" }, }}>
                            <Typography variant='h3' sx={{
                                borderRadius: "50%",
                                backgroundColor: "lightgray",
                                width: { xs: "15%", md: "12%" }, height: { md: "35%", xs: "30%" },
                                color: "rgb(156, 36, 180)", fontFamily: "Rubik"
                            }}>1</Typography>
                            <Typography mt={3} sx={{ fontFamily: "Rubik", color: "gray", fontSize: "1.5rem" }}>تتوفر الخدمة على أساس اشتراك شهري أو سنوي
                                لأصحاب المغاسل ومقدمي خدمات السيارات.</Typography>

                        </Grid>
                        <Grid item xs={12} md={2} mb={5}>

                        </Grid>
                        <Grid item xs={12} md={5} mb={5}
                            sx={{}} >
                            <Typography variant='h3'
                                sx={{
                                    borderRadius: "50%",
                                    backgroundColor: "lightgray",
                                    width: { xs: "15%", md: "12%" }, height: { md: "35%", xs: "35%" },
                                    color: "rgb(156, 36, 180)", fontFamily: "Rubik"
                                }}>2</Typography>
                            <Typography mt={3} sx={{ fontFamily: "Rubik", color: "gray", fontSize: "1.5rem" }}>يتم تحديد أسعار الاشتراك بناء على حجم العمل
                                والميزات المستخدمة.</Typography>

                        </Grid>
                        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
                            <Grid item xs={12} md={6} mb={5}
                                sx={{}} >
                                <Typography variant='h3' sx={{
                                    borderRadius: "50%",
                                    backgroundColor: "lightgray",
                                    width: { xs: "15%", md: "10%" }, height: { md: "35%", xs: "30%" },
                                    color: "rgb(156, 36, 180)", fontFamily: "Rubik"
                                }}>3</Typography>
                                <Typography mt={3} sx={{ fontFamily: "Rubik", color: "gray", fontSize: "1.5rem" }}>تتوفر الخدمة على أساس اشتراك شهري أو سنوي
                                    لأصحاب المغاسل ومقدمي خدمات السيارات.</Typography>

                            </Grid>

                        </Grid>
                    </Grid>


                </Container>
            </Box>
        </>
    )
}

export default Encommeing