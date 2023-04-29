import { useEffect, useState } from 'react'
import Header from "@/components/header/Header"
import Carousel from "./Carousel/Carousel"
import Brands from "./Brands/Brands"
import Categories from "./Categories/Categories"
import FPItems from "./FPItems/FPItems"
import Footer from '@/components/Footer/Footer'

const HomePage = () => {

    const [contentfulData, setContentfulData] = useState({});

    const apiData = async () => {
        const response = await fetch(`https://cdn.contentful.com/spaces/25h38m57z8zs/entries?access_token=0G9TBJln4K0otkAUEV1f2uT90L0R5kWG6qFoNvmkiT4`);

        const result = await response.json()
        setContentfulData(result)
        console.log(result)
    }
    // use effect takes two parameters, a callback function and an emopty array

    useEffect(() => {
        apiData();
    }, [])

    return (
        <>
            <Header />
            <Carousel />
            <Brands />
            <Categories contentfulData={contentfulData} />
            <FPItems contentfulData={contentfulData} />
            <Footer />
        </>
    )
}

export default HomePage