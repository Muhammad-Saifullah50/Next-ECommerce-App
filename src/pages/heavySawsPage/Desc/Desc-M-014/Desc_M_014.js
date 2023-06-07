import ApiDataState from '@/context/dataState'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import Page from './Page'
import Link from 'next/link'
const Desc_M_014 = () => {

    return (<>
        <Header />
        <div className="desc-banner">
        <Link href='/heavySawsPage/HeavySawsPage'> <button className="back-btn">Go Back</button> </Link>              <h2 className='desc-h2'>DeWalt Compact Slide Miter Saw M-014
            </h2>
        </div>
        <ApiDataState>
                <Page />
        </ApiDataState>
        <Footer />
    </>)
}
export default Desc_M_014