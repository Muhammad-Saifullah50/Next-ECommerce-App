import '@/styles/globals.css'
import Loader from './Loader'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true)
    }

    const handleRouteChangeComplete = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
