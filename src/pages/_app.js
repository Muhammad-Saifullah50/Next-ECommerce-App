import '@/styles/globals.css'
import Loader from './Loader'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {

    const handleRouteChange = () => {
      setLoading(true)
      return;
    };

    const handleRouteComplete = () => {
      setLoading(false)
      return;
    };

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteComplete)// If the component is unmounted, unsubscribe

    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])
  return (<>

    {loading ? (<Loader />) : (
      <Component {...pageProps} />
    )
    }
  </>)
}