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
                        {renderTitle('3u6K7kVh5sPkGN2hKvwSi8', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between ">
                        <div className="details mx-auto sm:ml-0 ">
                            <div className="itempage-itemrateprice ">
                                {renderPrice('3u6K7kVh5sPkGN2hKvwSi8', contentfulData)}
                                {renderRating('3u6K7kVh5sPkGN2hKvwSi8', contentfulData)}

                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/lightSawsPage/Desc/Desc-M-008/Desc_M_008'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image ">
                            {renderImage('6vMNCHJuh4JgYhmIYkFWZQ', 'alt', contentfulData)}

                        </div>
                    </div>
                </div>


                <div className="itempage-items ">
                    <div className="itempage-itemheading ">
                        {renderTitle('6rQjZ1rSswD57AUiTVyOlg', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between">
                        <div className="details mx-auto sm:ml-0">
                            <div className="itempage-itemrateprice ">
                                {renderPrice('6rQjZ1rSswD57AUiTVyOlg', contentfulData)}
                                {renderRating('6rQjZ1rSswD57AUiTVyOlg', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/lightSawsPage/Desc/Desc-M-009/Desc_M_009'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image ">
                            {renderImage('3r8RgdGFxAi6f9ZTlNigug', 'alt', contentfulData)}

                        </div>
                    </div>
                </div>
                <div className="itempage-items ">
                    <div className="itempage-itemheading ">
                        {renderTitle('4LSZZkLcgcwDmZeSTkvIld', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between">
                        <div className="details mx-auto sm:ml-0">
                            <div className="itempage-itemrateprice">
                                {renderPrice('4LSZZkLcgcwDmZeSTkvIld', contentfulData)}
                                {renderRating('4LSZZkLcgcwDmZeSTkvIld', contentfulData)}

                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/lightSawsPage/Desc/Desc-M-011/Desc_M_011'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image">
                            {renderImage('6yZMByZ6RWK8Hse0Tw6p9k', 'alt', contentfulData)}

                        </div>
                    </div>
                </div>
                <div className="itempage-items ">
                    <div className="itempage-itemheading ">
                        {renderTitle('1WcsUOH8ngdpUZU7u0CqQB', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between">
                        <div className="details mx-auto sm:ml-0">
                            <div className="itempage-itemrateprice">
                                {renderPrice('1WcsUOH8ngdpUZU7u0CqQB', contentfulData)}
                                {renderRating('1WcsUOH8ngdpUZU7u0CqQB', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/lightSawsPage/Desc/Desc-M-010/Desc_M_010'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image">
                            {renderImage('6MY1fRaLmgCNRjupzne5aw', 'alt', contentfulData)}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Items









