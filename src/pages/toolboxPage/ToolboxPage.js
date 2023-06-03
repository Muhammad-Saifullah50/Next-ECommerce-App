import ApiDataState from '@/context/dataState'
import Items from './Items/Items'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
const ToolboxPage = () => {

    return (<>
        <Header />
        <div className="banner flex justify-center items-center w-full h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] bg-[url('/images/black.jpg')] bg-no-repeat text-slate-200">

            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold'> Dewalt Multipurpose Tool Boxes </h2>
        </div>
        <ApiDataState>
            <Items />
        </ApiDataState>
<Footer />
    </>)
}

export default ToolboxPage