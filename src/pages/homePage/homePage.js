import Header from "@/components/header/Header"
import Carousel from "./Carousel/Carousel"
import Categories from "./Categories/Categories"
import FPItems from "./FPItems/FPItems"
import Footer from '@/components/Footer/Footer'
import ApiDataState from "@/context/dataState"

const HomePage = () => {

    return (
        <>
            <Header />
            <Carousel />

            <ApiDataState>
                <Categories />
            </ApiDataState>

            <ApiDataState>
                <FPItems />
            </ApiDataState>

            <Footer />
        </>
    )
}

export default HomePage