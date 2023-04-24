import Header from "@/components/header/header"
import Carousel from "./Carousel/Carousel"
import Brands from "./Brands/Brands"
import Categories from "./Categories/Categories"

const homePage = () => {

    return (
        <>
            <Header />
            <Carousel />
            <Brands />
            <Categories />
        </>
    )
}

export default homePage