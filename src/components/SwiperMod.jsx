import { Navigation, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import * as S from './SwiperMod.styles';

const SwiperMod = () => {
  return (
    <S.Container>
      <Swiper
        modules={[
          Navigation,
          Autoplay
        ]}

        /* ---------- CONFIG GERAL ---------- */

        spaceBetween={0}

         breakpoints={{
  
       768: {
         slidesPerView: 1,
       },
       1024: {
         slidesPerView: 3,
       },
      }}

        centeredSlides={true}

        loop={true}

        grabCursor={true}

        speed={800}

        /* ---------- SETAS ---------- */

        navigation={true}

        /* ---------- AUTOPLAY ---------- */

        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

      
      
      >
        <SwiperSlide>
          <S.SlideBox>1</S.SlideBox>
        </SwiperSlide>

        <SwiperSlide>
          <S.SlideBox>2</S.SlideBox>
        </SwiperSlide>

        <SwiperSlide>
          <S.SlideBox>3</S.SlideBox>
        </SwiperSlide>

        <SwiperSlide>
          <S.SlideBox>4</S.SlideBox>
        </SwiperSlide>

        <SwiperSlide>
          <S.SlideBox>5</S.SlideBox>
        </SwiperSlide>
      </Swiper>
    </S.Container>
  );
};

export default SwiperMod;