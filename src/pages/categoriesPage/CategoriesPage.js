import Header from "@/components/header/Header"
import CategoryPageItems from "./CategoryPageItems/CategoryPageItems"
import ApiDataState from "@/context/dataState"
import Footer from "@/components/Footer/Footer"
const CategoriesPage = () => {

    return (<>
        <Header />

        <ApiDataState>
            <CategoryPageItems />
        </ApiDataState>

        <Footer />
    </>)
}
export default CategoriesPage