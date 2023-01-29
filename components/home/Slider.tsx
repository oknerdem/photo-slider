import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Images from '@/data/Data';
import styles from '@/styles/Home.module.css';
import 'swiper/css';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      className="w-full mx-auto items-center justify-center self-center content-center max-w-[34rem]"
    >
      {Images.map(image => {
        return (
          <SwiperSlide key={image.id}>
            <Image
              src={image.src}
              width={320}
              height={230}
              alt={image.alt}
              className={styles.sliderImage}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
