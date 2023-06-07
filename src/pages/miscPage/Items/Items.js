import { useContext } from 'react'
import dataContext from '@/context/dataContext'
import { renderTitle, renderImage, renderPrice, renderRating } from '@/pages/bandSawsPage/Items/Items'
import Link from 'next/link'

const Items = () => {

    const contentfulData = useContext(dataContext)
    console.log(contentfulData)

    return (
        <>
            <div className="itembox">
                <div className="itempage-items ">
                    <div className="itempage-itemheading ">
                        {renderTitle('1B9FO2cSzaYVBE91bhqBpK', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between ">
                        <div className="details mx-auto sm:ml-0 ">
                            <div className="itempage-itemrateprice ">
                                {renderPrice('1B9FO2cSzaYVBE91bhqBpK', contentfulData)}
                                {renderRating('1B9FO2cSzaYVBE91bhqBpK', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/miscPage/Desc/Desc-M-027/Desc_M_027'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image ">
                            {renderImage('6DwL4CdFT89zdilYLRHs9J', 'alt', contentfulData)}
                        </div>
                    </div>
                </div>


                <div className="itempage-items ">
                    <div className="itempage-itemheading ">
                        {renderTitle('69OXUd76z9vfh6N2fCGlqT', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between">
                        <div className="details mx-auto sm:ml-0">
                            <div className="itempage-itemrateprice ">
                                {renderPrice('69OXUd76z9vfh6N2fCGlqT', contentfulData)}
                                {renderRating('69OXUd76z9vfh6N2fCGlqT', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/miscPage/Desc/Desc-M-026/Desc_M_026'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image ">
                            {renderImage('2dVLKUXcxYs98j9NSnt1ag', 'alt', contentfulData)}

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Items






