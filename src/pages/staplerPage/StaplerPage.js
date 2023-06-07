import ApiDataState from '@/context/dataState'
import Items from './Items/Items'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
const StaplerPage = () => {

    return (<>
        <Header />
        <div className="categorypage-banner">
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold'> Dewalt Heavy Duty Staplers </h2>
        </div>
        <ApiDataState>
            <Items />
        </ApiDataState>
        <Footer />
    </>)
}

export default StaplerPage