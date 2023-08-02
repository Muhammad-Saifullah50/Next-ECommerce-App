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

            <Link className="link" href='drillPage/DrillPage'>

                <div className="cards flex flex-col items-center  rounded-xl  bg-white w-[30vh] h-[35vh] mx-5 my-5 hover:scale-110 hover:ease-in hover:duration-500 shadow-slate-500 shadow-lg">

                    <div className="fptitle text-lg">{renderTitle('69DvSE0PiR3lHL59J0UDAn', contentfulData)}</div>

                    <div className="fpimg w-[22vh] h-[22vh] flex justify-center my-2">{renderImage('5dfnNWPtRhjV9aidvKNEGh', 'fp1', contentfulData)}</div>

                    <div className="fpprice text-lg">PKR 15,000</div>
                </div>
            </Link>
            <Link className="link" href='bandSawsPage/BandSawsPage'>

                <div className="cards flex flex-col items-center  rounded-xl  bg-white w-[30vh] h-[35vh] mx-5 my-5 hover:scale-110 hover:ease-in hover:duration-500 shadow-slate-500 shadow-lg">

                    <div className="fptitle text-lg">{renderTitle('1r5GqxlKaejhajWlCJKBpY', contentfulData)}</div>

                    <div className="fpimg w-[22vh] h-[22vh] flex justify-center my-2">{renderImage('tCrbRiWSIkuQQcSKqIFPf', 'fp1', contentfulData)}</div>

                    <div className="fpprice text-lg">PKR 13,000</div>
                </div>
            </Link>
            <Link className="link" href='oscillatoryGrinderPage/OscillatoryGrinderPage'>

                <div className="cards flex flex-col items-center  rounded-xl  bg-white w-[30vh] h-[35vh] mx-5 my-5 hover:scale-110 hover:ease-in hover:duration-500 shadow-slate-500 shadow-lg">

                    <div className="fptitle text-lg">{renderTitle('2FeEPy4Bwc4Rlg2WfH5Vum', contentfulData)}</div>

                    <div className="fpimg w-[22vh] h-[22vh] flex justify-center my-2">{renderImage('6ccFQQznaehaIdvdkr8ooX', 'fp1', contentfulData)}</div>

                    <div className="fpprice text-lg"><p>PKR 18,000</p></div>
                </div>
            </Link>
        </div>
    </>)
}
export default FPItems

