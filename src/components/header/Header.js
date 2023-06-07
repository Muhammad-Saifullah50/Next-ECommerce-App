import Topbar from "./topbar/topbar"
import Lowerbar from "./lowerbar/lowerbar"
import Navbar from "./navbar/navbar"
const Header = () => {

    return (
        <>

            <Topbar />
            <Lowerbar />
            <div className="navbar sticky top-0 z-40">
            <Navbar />
        </div >
        </>
    )
}

export default Header