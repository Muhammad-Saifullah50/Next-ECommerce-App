import styles from '@/styles/carousel.module.css';
import Head from 'next/head';

const Carousel = () => {
  return (
    <>
      <Head>
        <link rel="preload" href="/images/slide1.png" as="image" />
        <link rel="preload" href="/images/slide2.png" as="image" />
        <link rel="preload" href="/images/slide3.png" as="image" />
        <link rel="preload" href="/images/slide4.png" as="image" />
      </Head>

      <div className={styles.imgslider}>
        <div className={styles.carouseltext}>
          <h2>Professional Power Tools</h2>
          <p>Over the years, we have created professional power tools and equipment that complement your construction and building process.</p>
        </div>
      </div>
    </>
  );
};

export default Carousel;
