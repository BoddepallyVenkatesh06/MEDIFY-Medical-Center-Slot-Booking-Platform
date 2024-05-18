import { Box, Container } from "@mui/material";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import offer1 from '../../../assets/offer1.png'
import offer2 from '../../../assets/offer2.png'

export default function Offers() {
    return (
        <Box py={6}>
            <Container maxWidth='xl'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={
                        {
                            767: {
                                slidesPerView: 3
                            }
                        }
                    }
                >

                    <SwiperSlide>
                        <Box component={'img'} src={offer1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer2} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer2} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer2} />
                    </SwiperSlide>

                </Swiper>
            </Container>
        </Box>
    )
}