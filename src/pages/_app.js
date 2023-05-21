import '@/styles/globals.css'
import Loader from './Loader'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const initialLoading = () => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return timer; // Return the timeout reference
  };
  

  const timerRef = initialLoading();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    const handleRouteChangeError = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);

      clearTimeout(timerRef);

    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
