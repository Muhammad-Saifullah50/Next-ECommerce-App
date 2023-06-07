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
                        {renderTitle('67mPkt3Wjgo1TynGEDfNVc', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between ">
                        <div className="details mx-auto sm:ml-0 ">
                            <div className="itempage-itemrateprice ">
                                {renderPrice('67mPkt3Wjgo1TynGEDfNVc', contentfulData)}
                                {renderRating('67mPkt3Wjgo1TynGEDfNVc', contentfulData)}


                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/heavySawsPage/Desc/Desc-M-012/Desc_M_012'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image ">
                            {renderImage('29fPL5QFfyWPxCAZ0pkiQz', 'alt', contentfulData)}
                        </div>
                    </div>
                </div>


                <div className="itempage-items ">
                    <div className="itempage-itemheading ">
                        {renderTitle('6ighvhahV902BZKeG2Nu03', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between">
                        <div className="details mx-auto sm:ml-0">
                            <div className="itempage-itemrateprice ">
                                {renderPrice('6ighvhahV902BZKeG2Nu03', contentfulData)}
                                {renderRating('6ighvhahV902BZKeG2Nu03', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/heavySawsPage/Desc/Desc-M-013/Desc_M_013'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image ">
                            {renderImage('4lccyvzqkycqNFA9lQV87p', 'alt', contentfulData)}
                        </div>
                    </div>
                </div>
                <div className="itempage-items ">
                    <div className="itempage-itemheading ">
                        {renderTitle('4VzIsrlOhwM9FOkhTcjzPh', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between">
                        <div className="details mx-auto sm:ml-0">
                            <div className="itempage-itemrateprice">
                                {renderPrice('4VzIsrlOhwM9FOkhTcjzPh', contentfulData)}
                                {renderRating('4VzIsrlOhwM9FOkhTcjzPh', contentfulData)}

                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/heavySawsPage/Desc/Desc-M-014/Desc_M_014'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image">
                            {renderImage('MH5bzjSROfpwPKAZou9Jt', 'alt', contentfulData)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Items



