import ApiDataState from '@/context/dataState'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import Page from './Page'
import Link from 'next/link'
const Desc_M_021 = () => {

    return (<>
        <Header />
        <div className="desc-banner">
           <Link href='/angleGrinderPage/AngleGrinderPage'><button className="back-btn">Go Back</button></Link> 
            <h2 className='desc-h2'>DeWalt Modern Grinder M-021</h2>
        </div>
        <ApiDataState>
                <Page />
        </ApiDataState>
        <Footer />
    </>)
}
export default Desc_M_021