import ApiDataState from '@/context/dataState'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import Page from './Page'
import Link from 'next/link'
const Desc_M_024 = () => {

    return (<>
        <Header />
        <div className="desc-banner">
           <Link href='/polishersPage/PolisherPage'> <button className="back-btn">Go Back</button></Link>
            <h2 className='desc-h2'>DeWalt Heavy Duty Polisher M-024
</h2>
        </div>
        <ApiDataState>
            <Page />
        </ApiDataState>
        <Footer />
    </>)
}
export default Desc_M_024