import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide components
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { useState } from 'react';



const containerStyle = {
    transition: "background .3s, border .3s, border-radius .3s, box-shadow .3s",
    marginTop: "5%",
    marginBottom: { xs: "10%", md: "5%" },
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
};

const contentStyle = {
    color: "black",
    textAlign: "left",
    marginTop: "20%",
    marginLeft: "10%",
    marginBottom: "10%",
    maxWidth: "70%",
};
const imageContainerStyle = {
    // display: 'flex',
    // justifyContent: 'space-around',
    color: 'rgb(100, 80, 37)',

    position: "relative",
};
const outlinedButton = {
    backgroundColor: '#468FAF',

    color: 'white',
    height: "20%",
    display: { md: "block", xs: "none" },
    width: { md: "40%", xs: "50%" },
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
const outlinedButton2 = {
    backgroundColor: '#468FAF',
    color: 'white',
    height: "20%",
    width: { md: "40%", xs: "50%" },

    padding: "10px",

    marginBottom: "7%",
    display: { md: "none", xs: "block" },
    fontFamily: { md: "3rem", xs: ".5rem" },
    '&:hover': {
        backgroundColor: 'white',
        border: '1px solid #012A4A',
        color: '#012A4A',
    }
}

const slides = [
    {
        imageUrl: 'https://airlineautoparts.net/wp-content/uploads/2019/04/DIY-Transmission-Installation.jpg',
        
        title: " فرصة الاستثمار",
        describtion: "يعد قطاع خدمات الســـيارات ومغاســـل السيارات من  ً أ كثر الصناعات نموا واستدامة في الوقت الحالي."
    },
    {
        imageUrl: 'https://myfamilypedia.org/wp-content/uploads/2021/07/DetailingAcademy1_1600x900.jpg',
       
        title: "استخدام تقنيات حديثة",
        describtion: "يعتمد العديد من أصحاب المغاســـل ومقدمي خدمات  السيارات على أدوات تقنية محدودة أو عمليات يدوية  لإدارة عملياتهم."
    },
    {
        imageUrl: 'https://empire-s3-production.bobvila.com/slides/35731/original/car_wash.jpeg?1580844353',
        title: "أستبدال التقنيات القديمة",
        describtion: "توفـــر منصـــة SAAS المقترحـــة فرصـــة لتحويـــل هذه  العمليـــات التقليدية إلى نمـــوذج رقمي متكامل، مما  يؤدي إلى زيادة الكفاءة وتحسين تجربة العملاء."
    }
];

export default function HeaderSlider() {
    const [swiper, setSwiper] = useState(null);

    return (
        <Box mb={10}>
            <Swiper
                loop={true}
                autoplay={{ delay: 4000 }} // 5 seconds delay between slides
                onSwiper={setSwiper}
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                sx={{ color: "beige", position: 'relative' }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Box sx={{
                            backgroundImage:
                                `linear-gradient(rgba(9, 18, 66, 0.5), rgba(9, 18, 66, 0.5)), url(${slide.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundAttachment: "fixed",
                            objectFit: "cover",
                            height:"40vh",
                            padding: "10%",
                            direction: "rtl",
                        }}>
                            <Box mt={5}>
                                <Container>
                                    <Typography mb={3} sx={{color:"white",fontFamily:"Rubik",fontSize:{md:"3rem",xs:"2rem"},}}>{slide.title}
                                    </Typography>
                                    <Typography sx={{color:"lightgray",fontFamily:"Rubik",fontSize:{md:"1.5rem",xs:"1rem"}, width:{md:"50%",xs:"70%"}}}>{slide.describtion}</Typography>
                                </Container>
                            </Box>

                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
