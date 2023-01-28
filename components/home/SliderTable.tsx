import Image from 'next/image';
import styles from '@/styles/Home.module.css';

interface SliderTableProps {
  index: number;
  current: number;
  image: {
    id: number;
    src: string;
    alt: string;
  };
}

const SliderTable = ({ index, current, image }: SliderTableProps) => {
  return (
    <div
      className={index === current ? styles.slideActive : styles.slide}
      key={image.id}
    >
      {index === current && (
        <Image
          src={image.src}
          width={320}
          height={230}
          alt={image.alt}
          className={styles.sliderImage}
        />
      )}
    </div>
  );
};

export default SliderTable;
