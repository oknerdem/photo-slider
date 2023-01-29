import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Image from 'next/image';
import Images from '@/data/Data';
import styles from '@/styles/Home.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
  return (
    <div className={styles.sliderMain}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation
        loop
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
