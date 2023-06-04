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
                        {renderTitle('6ignZvImEqa5T9fq3d6bT5', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between ">
                        <div className="details mx-auto sm:ml-0 ">
                            <div className='itempage-itemrateprice'>
                                {renderPrice('6ignZvImEqa5T9fq3d6bT5', contentfulData)}
                                {renderRating('6ignZvImEqa5T9fq3d6bT5', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/bandSawsPage/Desc/Desc-M-001/Desc_M_001'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image ">
                            {renderImage('28uDfdCuQxxxuzCMwiXQWT', 'alt', contentfulData)}
                        </div>
                    </div>
                </div>
                <div className="itempage-items ">
                    <div className="itempage-itemheading ">
                        {renderTitle('1YfSGDjWL7AKorlePG62GM', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between ">
                        <div className="details mx-auto sm:ml-0 ">
                            <div className='itempage-itemrateprice'>
                                {renderPrice('1YfSGDjWL7AKorlePG62GM', contentfulData)}
                                {renderRating('1YfSGDjWL7AKorlePG62GM', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/bandSawsPage/Desc/Desc-M-001/Desc_M_001'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image ">
                            {renderImage('6Vu4RfvN2ea0L2rJfjK5vm', 'alt', contentfulData)}
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Items





