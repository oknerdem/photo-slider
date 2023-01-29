import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Images from '@/data/Data';
import styles from '@/styles/Home.module.css';
import 'swiper/css';

const Slider = () => {
  return (
    <div className={styles.sliderMain}>
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={10}
        className={styles.sliderSwiper}
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
    </div>
  );
};

export default Slider;
