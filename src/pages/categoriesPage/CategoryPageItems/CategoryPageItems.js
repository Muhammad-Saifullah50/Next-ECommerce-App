import Image from 'next/image'
import { useContext } from "react"
import dataContext from "@/context/dataContext"
import Link from 'next/link'


const CategoryPageItems = () => {


    const contentfulData = useContext(dataContext)
    // console.log(contentfulData)

    // this function will render title of our categories.

    const renderTitle = (id) => {
        const item = contentfulData?.items?.find((item) => item.sys.id === id)

        return item ? <h3 className='font-bold text-base pt-5' key={item.sys.id}>{item?.fields?.title}</h3> : null

    }

    // this function will render image of our categories.

    const renderImage = (id, alt) => {
        const asset = contentfulData?.includes?.Asset?.find(asset => asset.sys.id === id)

        if (asset) {
            const imageUrl = 'https:' + asset.fields.file.url

            return <Image className='h-[15vh] lg:h-[20vh] w-[15vh] lg:w-[20vh] my-2' src={imageUrl} width={144} height={144} alt={alt} key={asset.sys.id} />

        }

    }
    const renderPriceRange = (id) => {
        const item = contentfulData?.items?.find((item) => item.sys.id === id)

        return item ? <p key={item.sys.id}>{item?.fields?.price}</p> : null
    }



    return (<>
        <div className="banner flex justify-center items-center w-full h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] bg-[url('/images/black.jpg')] bg-no-repeat text-slate-200 ">
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold'>Categories</h2>
        </div>

        <div className="categories flex w-full">
            <div className="cardgrid flex flex-wrap justify-center">
                <div className="categorypage-cards">
                    {renderTitle('1r5GqxlKaejhajWlCJKBpY')}
                    {renderImage('tCrbRiWSIkuQQcSKqIFPf', 'band saw')}
                    {renderPriceRange('1r5GqxlKaejhajWlCJKBpY')}
                    <Link href='/bandSawsPage/BandSawsPage'>
                        <button className="btn bg-yellow-500 px-7 py-[2px] my-2">Explore</button></Link>

                </div>
                <div className="categorypage-cards">
                    {renderTitle('2FeEPy4Bwc4Rlg2WfH5Vum')}
                    {renderImage('6ccFQQznaehaIdvdkr8ooX', 'oscillatory grinder')}
                    {renderPriceRange('2FeEPy4Bwc4Rlg2WfH5Vum')}
                    <Link href='/oscillatoryGrinderPage/OscillatoryGrinderPage'>
                        <button className="btn bg-yellow-500 px-7 py-[2px] my-2">Explore</button></Link>

                </div>
              
                
                <div className="categorypage-cards ">
                    {renderTitle('69DvSE0PiR3lHL59J0UDAn')}
                    {renderImage('5dfnNWPtRhjV9aidvKNEGh', 'drill image')}
                    {renderPriceRange('69DvSE0PiR3lHL59J0UDAn')}
                    <Link href='/drillPage/DrillPage'>
                        <button className="btn bg-yellow-500 px-7 py-[2px] my-2">Explore</button></Link>

                </div>
                
               
                <div className="categorypage-cards">
                    {renderTitle('63IYjassGWyuEvwGmSgmr')}
                    {renderImage('1thaKzAhUAhdU3jf2XzW7w', 'angle grinder')}
                    {renderPriceRange('63IYjassGWyuEvwGmSgmr')}
                    <Link href='/angleGrinderPage/AngleGrinderPage'>
                        <button className="btn bg-yellow-500 px-7 py-[2px] my-2">Explore</button></Link>

                </div>
                <div className="categorypage-cards ">
                    {renderTitle('2LKFehcJZ2ZeP5lzZ43YkD')}
                    {renderImage('Qybq2kbrlxWZ7FcK0WUPd', 'compressor')}
                    {renderPriceRange('2LKFehcJZ2ZeP5lzZ43YkD')}
                    <Link href='/rotaryCompressorPage/RotaryCompressorPage'>
                        <button className="btn bg-yellow-500 px-7 py-[2px] my-2">Explore</button></Link>

                </div>
                
              
                <div className="categorypage-cards">
                    {renderTitle('433Z0st7xwyTiXiRwR0fLr')}
                    {renderImage('2dVLKUXcxYs98j9NSnt1ag', 'miscellanous')}
                    {renderPriceRange('433Z0st7xwyTiXiRwR0fLr')}
                    <Link href='/miscPage/MiscPage'>
                        <button className="btn bg-yellow-500 px-7 py-[2px] my-2">Explore</button></Link>

                </div>
            </div>
        </div>
    </>)
}

export default CategoryPageItems





// 
// }
// .cards h3{
//     font-size: 1.3rem;
// }
// .cards img{
//     margin-top: 1vh;
//     height: 38vh;
//     width: 38vh;
// }
// .cards p{
//     font-size: 1.4rem;
// }

// 
// }
// .btn{
//     color: black;
//     background-color: #F9E722;
//     width: 20vw;
//     height: 4vh;
//     border-radius: 5px;
//     font-size: 14px;
//     font-weight: bold;
//     font-family: 'Baloo Bhai 2', cursive;
//     font-size: 16px;

// }
// .btn:hover{
//     color: #F9E722;
//     background-color: black;
// }
