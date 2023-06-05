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
                        {renderTitle('6Ptg1CyhEStPcdWv5jPzTv', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between ">
                        <div className="details mx-auto sm:ml-0 ">
                            <div className='itempage-itemrateprice'>
                                {renderPrice('6Ptg1CyhEStPcdWv5jPzTv', contentfulData)}
                                {renderRating('6Ptg1CyhEStPcdWv5jPzTv', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/staplerPage/Desc/Desc-M-025/Desc_M_025'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image ">
                            {renderImage('6M9cqMoRwwyoTrGWdpgyFl', 'alt', contentfulData)}
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Items





