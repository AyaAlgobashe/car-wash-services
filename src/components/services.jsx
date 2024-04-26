import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HandshakeIcon from '@mui/icons-material/Handshake';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
const ServiceList = () => {
    return (
        <Box sx={{ direction: "rtl" }}>
            <Container>
                <Box mb={10}>
                    <Typography variant='h2'
                        sx={{
                            color: '#012A4A',
                            fontFamily: "Rubik",
                            fontWeight: "bold",
                            textAlign: "center"

                        }}
                    > خدمات <span style={{ color: "rgb(156, 36, 180)", }}>BDRH</span></Typography>
                </Box>
                <Grid container p={3}>
                    <Grid item xs={12} md={6} lg={4} mb={10}
                        sx={{
                            padding: '3%',
                            textAlign: { xs: "center", md: "right" },

                        }}>
                        <Box mb={5} sx={{

                            width: { md: "5vw", xs: "25vw" },
                            marginRight: { xs: "35%", md: "20%" },


                        }}>
                            <CalendarMonthIcon sx={{ color: "rgb(156, 36, 180)", fontSize: "5rem" }} />
                        </Box>
                        <Box >
                            <Typography variant='h5' sx={{
                                color: '#012A4A',
                                fontFamily: "Rubik",
                                fontWeight: "bold",


                            }}> إدارة مواعيد العمل والحجوزات</Typography>
                        </Box>
                        <Box mt={5} sx={{ width: { md: "70%", xs: "100%" }, color: "grey" }}>
                            <Typography variant='p' sx={{ fontFamily: "Rubik", }}>
                                يتيـــح النظـــام لأصحاب المغاســـل ومقدمـــي خدمات الســـيارات تنظيم
                                مواعيد العمل وقبول الحجوزات عبر منصة إلكترونية مركزية.
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} mb={10}
                        sx={{
                            padding: '3%',
                            textAlign: { xs: "center", md: "right" },

                        }}>
                        <Box mb={5} sx={{

                            width: { md: "5vw", xs: "25vw" },
                            marginRight: { xs: "35%", md: "20%" },


                        }}>
                            <HandshakeIcon sx={{ color: "rgb(156, 36, 180)", fontSize: "5rem" }} />
                        </Box>
                        <Box >
                            <Typography variant='h5' sx={{
                                color: '#012A4A',
                                fontFamily: "Rubik",
                                fontWeight: "bold",


                            }}>    تتبع المركبات والخدمات</Typography>
                        </Box>
                        <Box mt={5} sx={{ width: { md: "70%", xs: "100%" }, color: "grey" }}>
                            <Typography variant='p' sx={{ fontFamily: "Rubik", }}>
                                يوفـــر النظـــام إمكانيـــة تتبع المركبـــات وتوثيـــق الخدمـــات المقدمة، مما
                                يسمح بتحسين الشفافية والمتابعة المستمرة لعمليات الصيانة.
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} mb={10}
                        sx={{
                            padding: '3%',
                            textAlign: { xs: "center", md: "right" },

                        }}>
                        <Box mb={5} sx={{

                            width: { md: "5vw", xs: "25vw" },
                            marginRight: { xs: "35%", md: "20%" },


                        }}>
                            <QueryStatsIcon sx={{ color: "rgb(156, 36, 180)", fontSize: "5rem" }} />
                        </Box>
                        <Box >
                            <Typography variant='h5' sx={{
                                color: '#012A4A',
                                fontFamily: "Rubik",
                                fontWeight: "bold",


                            }}> تحليل البيانات والتقارير</Typography>
                        </Box>
                        <Box mt={5} sx={{ width: { md: "70%", xs: "100%" }, color: "grey" }}>
                            <Typography variant='p' sx={{ fontFamily: "Rubik", }}>
                                يقدم النظام تحليلات مفصلة وتقارير قابلة للتخصيص، مما يســـاعد
                                المستخدمين على فهم أداء أعمالهم واتخاذ القرارات الاستراتيجية.

                            </Typography>

                        </Box>
                    </Grid>

                </Grid>
            </Container>

        </Box>
    )
}

export default ServiceList;
