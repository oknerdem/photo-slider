import { useState } from 'react';
import Images from '@/data/Data';
import SliderTable from '@/components/home/SliderTable';
import MoveButton from '@/components/MoveButton';
import styles from '@/styles/Home.module.css';

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = Images.length;

  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(Images) || Images.length <= 0) {
    return null;
  }

  return (
    <section className={styles.sliderMain}>
      <MoveButton onClick={prevImg}>←</MoveButton>
      {Images.map((image, index) => {
        return (
          <SliderTable
            key={image.id}
            index={index}
            current={current}
            image={image}
          />
        );
      })}
      <MoveButton onClick={nextImg}>→</MoveButton>
    </section>
  );
};

export default Slider;
