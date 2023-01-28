import styles from '@/styles/Home.module.css';

interface Props {
  sliderTitle: string;
}

const Title = ({ sliderTitle }: Props) => {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>{sliderTitle}</h2>
    </main>
  );
};

export default Title;
