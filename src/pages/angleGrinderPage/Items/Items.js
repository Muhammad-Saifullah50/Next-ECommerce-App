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
                        {renderTitle('7lfNNd2Oqn1oqaRJBO51pG', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between ">
                        <div className="details mx-auto sm:ml-0 ">
                            <div className="itempage-itemrateprice ">
                                {renderPrice('7lfNNd2Oqn1oqaRJBO51pG', contentfulData)}
                                {renderRating('7lfNNd2Oqn1oqaRJBO51pG', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/angleGrinderPage/Desc/Desc-M-022/Desc_M_022'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image ">
                            {renderImage('1thaKzAhUAhdU3jf2XzW7w', 'alt', contentfulData)}
                        </div>
                    </div>
                </div>


                <div className="itempage-items ">
                    <div className="itempage-itemheading ">
                        {renderTitle('4NquC15vKDwmVTxJO0idyD', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between">
                        <div className="details mx-auto sm:ml-0">
                            <div className="itempage-itemrateprice ">
                                {renderPrice('4NquC15vKDwmVTxJO0idyD', contentfulData)}
                                {renderRating('4NquC15vKDwmVTxJO0idyD', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/angleGrinderPage/Desc/Desc-M-021/Desc_M_021'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image ">
                            {renderImage('2m5FKJVIIXLF6S2gCedcjs', 'alt', contentfulData)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Items




