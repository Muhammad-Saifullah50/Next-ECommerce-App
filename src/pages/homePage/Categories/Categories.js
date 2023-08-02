import { useContext } from "react"
import dataContext from "@/context/dataContext"
import { renderTitle, renderImage } from '@/pages/bandSawsPage/Items/Items'
import Link from 'next/link'

const Categories = () => {

    const contentfulData = useContext(dataContext)

    return (<>


        <div className="heading w-full flex justify-center text-xl md:2xl  h-14 items-center  ">
            <h2 className='font-bold md:font-extrabold'>Select a category to get started</h2>
        </div>
        <div className="categories bg-slate-50 py-12">

            <div className="cardgrid flex flex-wrap justify-center">
                
                <Link className="link" href='rotaryCompressorPage/RotaryCompressorPage'>

                    <div className="cards flex flex-col items-center rounded-xl   bg-white w-[30vh] h-[30vh] mx-5 my-5 hover:scale-110 hover:ease-in hover:duration-500  shadow-slate-500 shadow-lg">

                        <div className="categoryimg w-[22vh] h-[22vh] flex justify-center my-2">
                            {renderImage('Qybq2kbrlxWZ7FcK0WUPd', 'category2', contentfulData)}
                        </div>

                        <div className="categorytitle text-lg">{renderTitle('6cYafFjpZfFxLQNjCpTjfH', contentfulData)}
                        </div>
                    </div>

                </Link>
                <Link className="link" href='bandSawsPage/BandSawsPage'>

                    <div className="cards flex flex-col items-center rounded-xl   bg-white w-[30vh] h-[30vh] mx-5 my-5 hover:scale-110 hover:ease-in hover:duration-500  shadow-slate-500 shadow-lg">

                        <div className="categoryimg w-[22vh] h-[22vh] flex justify-center my-2">
                            {renderImage('tCrbRiWSIkuQQcSKqIFPf', 'category2', contentfulData)}
                        </div>

                        <div className="categorytitle text-lg">{renderTitle('1r5GqxlKaejhajWlCJKBpY', contentfulData)}
                        </div>
                    </div>

                </Link>
               
               
                

                <Link className="link" href='angleGrinderPage/AngleGrinderPage'>

                    <div className="cards flex flex-col items-center rounded-xl  bg-white w-[30vh] h-[30vh] mx-5 my-5 hover:scale-110 hover:ease-in hover:duration-500   shadow-slate-500 shadow-lg">

                        <div className="categoryimg w-[22vh] h-[22vh] flex justify-center my-2">
                            {renderImage('1thaKzAhUAhdU3jf2XzW7w', 'category6', contentfulData)}</div>

                        <div className="categorytitle text-lg">{renderTitle('4dxFYquMLEG3UQvDiCKS8A', contentfulData)}
                        </div>
                    </div>
                </Link>
               
                <Link href='https://www.youtube.com/embed/DMQ0-ENXxZg'>
                    <div className="cards flex flex-col items-center rounded-xl
                       bg-white w-[30vh] h-[30vh] mx-5 my-5 hover:scale-110 hover:ease-in hover:duration-500  shadow-slate-500 shadow-lg">
                        <iframe className="video categoryimg w-[22vh] h-[22vh] flex justify-center my-auto"  src="https://www.youtube.com/embed/DMQ0-ENXxZg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </Link>
            </div>
        </div>

    </>)
}

export default Categories



// .cards iframe {
//     height: 25vh;
//     width: 25vh;
//     margin: auto auto;
// }
