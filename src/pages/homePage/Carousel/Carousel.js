import styles from '@/styles/carousel.module.css'
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

      <div className="imgslider w-[95%] h-[70vh] bg-[url(/images/slide1.png)] max-w-full max-h-full bg-cover bg-center bg-no-repeat flex my-[2vh] mx-auto " id={styles.imgslider}>

        <div className="carouseltext">
          <h2>Professional Power Tools</h2>
          <p>Over the years, we have created professional power tools and equipment that complement your construction and building process.</p>
        </div>
      </div>
    </>
  );
};

export default Carousel;



// .carouseltext {
//   border: 2px solid black;
//   color: white;
//   width: 40%;
//   height: 100%;
//   position: relative;
//   left: 57%;
//   font-size: 1.5rem;
//   background-color: rgba(12, 11, 11, 0.603);
//   position: relative;
//   z-index: 1;

// }

// .carouseltext h2 {
//   padding: 10vh 2vh;
// }

// .carouseltext p {
//   padding: 0vh 2vh;
// }

// @media (max-width: 920px) {
//   .carouseltext p {
//       font-size: 1.4rem;
//   }
// }

// @media (max-width: 775px) {
//   .carouseltext h2 {
//       padding: 7vh 2vh;
//   }
// }
// @media (max-width: 610px) {
//   .carouseltext p {
//       font-size: 1.3rem;
//   }
//   .imgslider{
//       height: fit-content;
//   }
// }
// @media (max-width: 570px) {
//   .carouseltext p {
//       font-size: 1.2rem;
//   }
//   .carouseltext h2{
//       font-size: 1.7rem;
//   }
// }
// @media (max-width: 455px) {
//   .carouseltext p {
//       font-size: 1.1rem;
//   }
//   .carouseltext h2{
//       font-size: 1.6rem;
//       padding: 5vh 2vh;
//   }
//   .carouseltext{
//       width: 43%;
//   }
// }
// @media (max-width: 390px) {
//   .carouseltext p {
//       font-size: 1rem;
//   }
//   .carouseltext h2{
//       font-size: 1.5rem;
//       padding: 3vh 0vh;
//   }
//   .carouseltext{
//       width: 43%;
//   }
// }
