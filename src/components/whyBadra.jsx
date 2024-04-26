import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react'


const WhyBdrh = () => {
    const imgStyle = {
        backgroundImage:
            "linear-gradient(rgba(9, 18, 66, 0.5), rgba(9, 18, 66, 0.5)), url('https://www.andysautobridgeville.com/wp-content/uploads/2018/04/car-care-clinic-2-pic.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        objectFit: "cover",
        padding: "10%",
        direction: "rtl",
    }
    const outlinedButton = {
        backgroundColor: '#468FAF',
        color: 'white',
        height: "20%",
        width: { md: "20%", xs: "45%" },
        padding: "10px",
        marginTop: "5%",
        marginBottom: "7%",
        fontFamily: { md: "3rem", xs: ".5rem" },
        '&:hover': {
            backgroundColor: 'white',
            border: '1px solid #012A4A',
            color: '#012A4A',

        }
    }
    return (
        <>
            <Box mb={10} sx={imgStyle}>
                <Container >
                    <Typography variant='h3'
                        sx={{
                            color: "white",
                            textAlign: "center",
                            fontFamily: "Montserrat",
                            fontWeight: "bold"


                        }}>
                        لماذا <span style={{ color: "rgb(156, 36, 180)" }}>BDRA SAAS </span>؟

                    </Typography>
                    <Box sx={{ width: "75%",marginRight:{md:"7%",xs:"10%"} , fontSize:{md:"1.5rem" ,xs:"1.1rem"} }} >
                         <p style={{ textAlign: "center", color: "white",}}>
                        يهدف هذا الملف الاستثماري إلى عرض فرصة استثمارية في قطاع خدمات السيارات ومغاسل السيارات بنموذج SAAS.
                        يتم توفير الخدمة عبر الإنترنت، وتشمل مجموعة واسعة من الوظائف والميزات لتلبية احتياجات العملاء.

                    </p></Box>

                    {/* <Box sx={{display:"flex",justifyContent:"center"}}>
            <Button variant="outlined" sx={outlinedButton}>
              <Link to={"/about"} style={{textDecoration:"none",color:"#012A4A"}} >More Information</Link>
              </Button>
                        </Box> */}
                </Container>
            </Box>
        </>
    )
}

export default WhyBdrh