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
                        {renderTitle('30ToHMOMfi9bfsiIGfmZir', contentfulData)}

                    </div>
                    <div className="bottom flex justify-between ">
                        <div className="details mx-auto sm:ml-0 ">
                            <div className="itempage-itemrateprice sm:flex sm:flex-col sm:w-36">
                                {renderPrice('30ToHMOMfi9bfsiIGfmZir', contentfulData)}
                                {renderRating('30ToHMOMfi9bfsiIGfmZir', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/bandSawsPage/Desc/Desc-M-001/Desc_M_001'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image sm:absolute right-10">
                            {renderImage('4mKPrdHCD0HCi93hgvar6G', 'alt', contentfulData)}
                        </div>
                    </div>
                </div>


                <div className="itempage-items ">
                    <div className="itempage-itemheading ">
                        {renderTitle('1DcwcHy4PkjpdxSgJhIeOE', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between">
                        <div className="details mx-auto sm:ml-0">
                            <div className="itempage-itemrateprice">
                                {renderPrice('1DcwcHy4PkjpdxSgJhIeOE', contentfulData)}
                                {renderRating('1DcwcHy4PkjpdxSgJhIeOE', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/bandSawsPage/Desc/Desc-M-001/Desc_M_001'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image">
                            {renderImage('5qFRqzCKszoLkIXYzxvzRq', 'alt', contentfulData)}
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Items






