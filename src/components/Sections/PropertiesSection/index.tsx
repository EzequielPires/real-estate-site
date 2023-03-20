import { Box } from "@mui/material";
import { Title } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { CardProperty } from "../../Cards/CardProperty";

import styles from './styles.module.scss';
import { SwiperButtons } from "../../SwiperButtons";
import { useState } from "react";

export function PropertiesSection() {
    const [state, setState] = useState('start');

    return (
        <Box sx={{
            py: 3
        }}>
            <Box position={'relative'}>
                <Title variant="h4">Imóveis mais populares da sua região</Title>
            </Box>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={'auto'}
                onSlideChange={(swiper) => {
                    {swiper.isBeginning && setState('start')}
                    {swiper.isEnd && setState('end')}
                    {!swiper.isBeginning && !swiper.isEnd && setState('progress')}
                }}
            >
                <SwiperSlide className={styles.swiperSlide}>
                    <CardProperty />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <CardProperty />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <CardProperty />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <CardProperty />
                </SwiperSlide>
                <SwiperButtons state={state}/>
            </Swiper>
        </Box>
    )
}