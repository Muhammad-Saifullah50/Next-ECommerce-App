import { useContext } from 'react'
import dataContext from '@/context/dataContext'
import Link from 'next/link'
import { renderTitle, renderImage, renderPrice, renderRating } from '@/pages/bandSawsPage/Items/Items'

const Items = () => {

    const contentfulData = useContext(dataContext)
    console.log(contentfulData)

    return (
        <>
            <div className="itembox">
                <div className="itempage-items ">
                    <div className="itempage-itemheading ">
                        {renderTitle('2Y6MmagSzRZ9mVJ5rBUbbh', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between ">
                        <div className="details mx-auto sm:ml-0 ">
                            <div className="itempage-itemrateprice ">
                                {renderPrice('2Y6MmagSzRZ9mVJ5rBUbbh', contentfulData)}
                                {renderRating('2Y6MmagSzRZ9mVJ5rBUbbh', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/oscillatoryGrinderPage/Desc/Desc-M-006/Desc_M_006'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image ">
                            {renderImage('6aXf5x2FQfnyTGOz3fiLkE', 'alt', contentfulData)}
                        </div>
                    </div>
                </div>


                <div className="itempage-items ">
                    <div className="itempage-itemheading ">
                        {renderTitle('2qocGh7SWAT9hfFSH35q0V', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between">
                        <div className="details mx-auto sm:ml-0">
                            <div className="itempage-itemrateprice ">
                                {renderPrice('2qocGh7SWAT9hfFSH35q0V', contentfulData)}
                                {renderRating('2qocGh7SWAT9hfFSH35q0V', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/oscillatoryGrinderPage/Desc/Desc-M-005/Desc_M_005'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image ">
                            {renderImage('6ccFQQznaehaIdvdkr8ooX', 'alt', contentfulData)}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Items



