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
                        {renderTitle('4V8MkgYjkZrnro9Ik5BWEY', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between ">
                        <div className="details mx-auto sm:ml-0 ">
                            <div className='itempage-itemrateprice'>
                                {renderPrice('4V8MkgYjkZrnro9Ik5BWEY', contentfulData)}
                                {renderRating('4V8MkgYjkZrnro9Ik5BWEY', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/bandSawsPage/Desc/Desc-M-001/Desc_M_001'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image ">
                            {renderImage('Qybq2kbrlxWZ7FcK0WUPd', 'alt', contentfulData)}
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Items



