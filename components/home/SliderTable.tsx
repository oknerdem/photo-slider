import Image from 'next/image';
import styles from '@/styles/Home.module.css';

interface SliderTableProps {
  index: number;
  current: number;
  key: any;
  image: {
    id: number;
    src: string;
    alt: string;
  };
}

const SliderTable = ({ index, current, image, key }: SliderTableProps) => {
  return (
    <div className={styles.slide} key={key}>
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
