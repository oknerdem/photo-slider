import Image from 'next/image';
import styles from '@/styles/Home.module.css';

const Slider = () => {
  return (
    <section className={styles.sliderMain}>
      <button className={styles.sliderButton}>←</button>
      <Image src="/icon.png" width={320} height={230} alt="icon" />
      <button className={styles.sliderButton}>→</button>
    </section>
  );
};

export default Slider;
