import Header from "@/components/header/Header"
import Items from "./Items/Items"
import ApiDataState from "@/context/dataState"
import Footer from "@/components/Footer/Footer"

const LightSawsPage = () => {

    return (<>
        <Header />
        <div className="categorypage-banner">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold"> Dewalt Classic Light Saws </h2>
        </div>
        <ApiDataState>
            <Items />
        </ApiDataState>
        <Footer />
    </>)
}

export default LightSawsPage