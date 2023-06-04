import ApiDataState from '@/context/dataState'
import Items from './Items/Items'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
const ToolboxPage = () => {

    return (<>
        <Header />
        <div className="categorypage-banner">

            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold'> Dewalt Multipurpose Tool Boxes </h2>
        </div>
        <ApiDataState>
            <Items />
        </ApiDataState>
<Footer />
    </>)
}

export default ToolboxPage