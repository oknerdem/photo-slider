import { NextPage } from 'next';
import Header from '@/components/Header';
import Title from '@/components/home/Title';
import Slider from '@/components/home/Slider';

const Home: NextPage = () => {
  const title = 'Photo Slider';
  const content = 'Photo Slider App';
  const sliderTitle = 'Slider';

  return (
    <>
      <Header title={title} content={content} />
      <Title sliderTitle={sliderTitle} />
      <Slider />
    </>
  );
};

export default Home;
