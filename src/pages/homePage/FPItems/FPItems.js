import { useContext } from "react"
import dataContext from "@/context/dataContext"
import { renderTitle, renderImage } from '@/pages/bandSawsPage/Items/Items'
import Link from 'next/link'

const FPItems = () => {

    const contentfulData = useContext(dataContext)



    const renderPrice = (id) => {
        const item = contentfulData?.items?.find(item => item.sys.id === id)
        return item ? <p key={item.sys.id}>{item?.fields?.price}</p> : null
    }

    return (<>
        <div className="heading w-full flex justify-center text-xl md:2xl  h-14 items-center my-3">
            <h2 className='font-bold md:font-extrabold'>Frequently Purchased Items</h2>
        </div>

        <div className="main flex flex-wrap justify-center">

            <Link className="link" href='/heavySawsPage/HeavySawsPage'>

                <div className="cards flex flex-col items-center  rounded-xl  bg-white w-[30vh] h-[35vh]  mx-5 my-5  hover:scale-110 hover:ease-in hover:duration-500 shadow-slate-500 shadow-lg">


                    <div className="fptitle text-lg">{renderTitle('1b2jWRC4nHnINbXflCmubH', contentfulData)}</div>

                    <div className="fpimg w-[22vh] h-[22vh] flex justify-center my-2">{renderImage('29fPL5QFfyWPxCAZ0pkiQz', 'fpi3', contentfulData)}</div>

                    <div className="fpprice text-lg">{renderPrice('1b2jWRC4nHnINbXflCmubH')}</div>
                </div>
            </Link>
            <Link className="link" href='staplerPage/StaplerPage'>

                <div className="cards flex flex-col items-center  rounded-xl  bg-white w-[30vh] h-[35vh] mx-5 my-5 hover:scale-110 hover:ease-in hover:duration-500 shadow-slate-500 shadow-lg">

                    <div className="fptitle text-lg">{renderTitle('5NyPZs288xX8CXZdaU2KQE', contentfulData)}</div>

                    <div className="fpimg  w-[22vh] h-[22vh] flex justify-center my-2">{renderImage('6M9cqMoRwwyoTrGWdpgyFl', 'fp1', contentfulData)}</div>

                    <div className="fpprice text-lg">{renderPrice('5NyPZs288xX8CXZdaU2KQE')}</div>
                </div>
            </Link>
            <Link className="link" href='bandSawsPage/BandSawsPage'>

                <div className="cards flex flex-col items-center  rounded-xl  bg-white w-[30vh] h-[35vh] mx-5 my-5 hover:scale-110 hover:ease-in hover:duration-500 shadow-slate-500 shadow-lg">



                    <div className="fptitle text-lg">{renderTitle('42C2IdgXsc62NDz5rFWJrI', contentfulData)}</div>

                    <div className="fpimg w-[22vh] h-[22vh] flex justify-center my-2">{renderImage('tCrbRiWSIkuQQcSKqIFPf', 'fp1', contentfulData)}</div>

                    <div className="fpprice text-lg">{renderPrice('42C2IdgXsc62NDz5rFWJrI')}</div>
                </div>
            </Link>
        </div>
    </>)
}
export default FPItems

