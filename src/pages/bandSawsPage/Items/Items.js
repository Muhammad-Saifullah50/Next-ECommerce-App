import { useContext } from 'react'
import dataContext from '@/context/dataContext'
import Image from 'next/image'
import Link from 'next/link'



// this function will render title of our categories.

export const renderTitle = (id, contentfulData) => {
    const item = contentfulData?.items?.find((item) => item.sys.id === id)

    return item ? <h3 className='text-lg ' key={item.sys.id}>{item?.fields?.title}</h3> : null

}

// this function will render image of our categories.

export const renderImage = (id, alt, contentfulData) => {
    const asset = contentfulData?.includes?.Asset?.find(asset => asset.sys.id === id)

    if (asset) {
        const imageUrl = 'https:' + asset.fields.file.url

        return <Image className='' src={imageUrl} width={170} height={170} alt={alt} key={asset.sys.id} />

    }

}
export const renderPrice = (id, contentfulData) => {
    const item = contentfulData?.items?.find((item) => item.sys.id === id)

    return item ? <p  key={item.sys.id}>Price: {item?.fields?.price}</p> : null;


}
export const renderRating = (id, contentfulData) => {
    const item = contentfulData?.items?.find((item) => item.sys.id === id)

    return item ? <p  key={item.sys.id}>Rating: {item?.fields?.rating}</p> : null

}
const Items = () => {

    const contentfulData = useContext(dataContext)
    console.log(contentfulData)

    return (
        <>
            <div className="itembox">
                <div className="itempage-items ">
                    <div className="itempage-itemheading ">
                        {renderTitle('7sceAfoiIoR9lWTij4uubi', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between ">
                        <div className="details mx-auto sm:ml-0 ">
                            <div className="itempage-itemrateprice ">
                                {renderPrice('7sceAfoiIoR9lWTij4uubi', contentfulData)}
                                {renderRating('7sceAfoiIoR9lWTij4uubi', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/bandSawsPage/Desc/Desc-M-001/Desc_M_001'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image ">
                            {renderImage('3yVcW9wxP135N934utsvAo', 'alt', contentfulData)}
                        </div>
                    </div>
                </div>


                <div className="itempage-items ">
                    <div className="itempage-itemheading ">
                        {renderTitle('TmzGBkOfmuQ7dAUhQR3Rj', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between">
                        <div className="details mx-auto sm:ml-0">
                            <div className="itempage-itemrateprice ">
                                {renderPrice('TmzGBkOfmuQ7dAUhQR3Rj', contentfulData)}
                                {renderRating('TmzGBkOfmuQ7dAUhQR3Rj', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/bandSawsPage/Desc/Desc-M-003/Desc_M_003'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image ">
                            {renderImage('tCrbRiWSIkuQQcSKqIFPf', 'alt', contentfulData)}
                        </div>
                    </div>
                </div>
                <div className="itempage-items ">
                    <div className="itempage-itemheading ">
                        {renderTitle('3Popbf2nkOxtmAALlR4qPm', contentfulData)}
                    </div>
                    <div className="bottom flex justify-between">
                        <div className="details mx-auto sm:ml-0">
                            <div className="itempage-itemrateprice">
                                {renderPrice('3Popbf2nkOxtmAALlR4qPm', contentfulData)}
                                {renderRating('3Popbf2nkOxtmAALlR4qPm', contentfulData)}
                            </div>
                            <div className="btn flex justify-center">
                                <Link href='/bandSawsPage/Desc/Desc-M-002/Desc_M_002'>
                                    <button className="itempage-button">Read More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="itempage-image">
                            {renderImage('4thrwDMdiKLXzVYfSGLHSV', 'alt', contentfulData)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Items







