import styles from '@/styles/categories.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Categories = () => {

    const [contentfulData, setContentfulData] = useState({});

    const apiData = async () => {
        const response = await fetch(`https://cdn.contentful.com/spaces/25h38m57z8zs/entries?access_token=0G9TBJln4K0otkAUEV1f2uT90L0R5kWG6qFoNvmkiT4`);

        const result = await response.json()
        setContentfulData(result)
        console.log(result)
    }
    // use effect takes two parameters, a callback function and an emopty array

    useEffect(() => {
        apiData();
    }, [])

    // this function will render title of our categories.

    const renderTitle = (id) => {
        const item = contentfulData?.items?.find((item) => item.sys.id === id)
        return item ? <p key={item.sys.id}>{item?.fields?.title}</p> : null

    }

    // this function will render the image of our category

    const renderImage = (id, alt) => {
        const asset = contentfulData?.includes?.Asset.find((asset) => { asset.sys.id === id })

        const imageUrl = 'https: ' + asset.fields.file.url
        console.log(imageUrl)

        return <Image src={imageUrl} width={144} height={144} alt={alt} key={asset.sys.id}>

        </Image>
    
}





return (<>


    <div className={styles.heading}>
        <h2>Select a category to get started</h2>
    </div>
    <div className={styles.categories}>

        <div className={styles.cardgrid}>
            <div className={styles.cards}>
                {renderImage('29fPL5QFfyWPxCAZ0pkiQz', 'category1')}

                {renderTitle('4n8Vxvh6FsM216olF1R6hC')}

            </div>

            <div className={styles.cards}>
                {contentfulData && contentfulData?.includes?.Asset?.map((asset) => {
                    if (asset.sys.id === 'Qybq2kbrlxWZ7FcK0WUPd') {
                        const imageUrl = 'https:' + asset.fields.file.url
                        return (
                            <Image src={imageUrl} width={144} height={144} alt='category2' key={asset.sys.id}>
                            </Image>
                        )
                    }
                }
                )
                }


                {renderTitle('6cYafFjpZfFxLQNjCpTjfH')}

            </div>

            <div className={styles.cards}>
                {contentfulData && contentfulData?.includes?.Asset?.map((asset) => {
                    if (asset.sys.id === '28uDfdCuQxxxuzCMwiXQWT') {
                        const imageUrl = 'https:' + asset.fields.file.url
                        return (
                            <Image src={imageUrl} width={144} height={144} alt='category3' key={asset.sys.id}>
                            </Image>
                        )
                    }
                }
                )
                }

                {renderTitle('3KTDuJ3m402V1aTV2uSfzG')}
            </div>
            <div className={styles.cards}>

                {contentfulData && contentfulData?.includes?.Asset?.map((asset) => {
                    if (asset.sys.id === '6M9cqMoRwwyoTrGWdpgyFl') {
                        const imageUrl = 'https:' + asset.fields.file.url
                        return (
                            <Image src={imageUrl} width={144} height={144} alt='category4' key={asset.sys.id}>
                            </Image>
                        )
                    }
                }
                )
                }
                {renderTitle('NmWKEav8HzjwCBl0Z4qQI')}

            </div>


            <div className={styles.cards}>
                {contentfulData && contentfulData?.includes?.Asset?.map((asset) => {
                    if (asset.sys.id === '3cv9gZ8URV4IiI6lpmHKBE') {
                        const imageUrl = 'https:' + asset.fields.file.url
                        return (
                            <Image src={imageUrl} width={144} height={144} alt='category5' key={asset.sys.id}>
                            </Image>
                        )
                    }
                }
                )
                }
                {renderTitle('4jMnuJn55XLgI5uK6zJVQT')}

            </div>
            <div className={styles.cards}>
                {contentfulData && contentfulData?.includes?.Asset?.map((asset) => {
                    if (asset.sys.id === '1thaKzAhUAhdU3jf2XzW7w') {
                        const imageUrl = 'https:' + asset.fields.file.url
                        return (
                            <Image src={imageUrl} width={144} height={144} alt='category6' key={asset.sys.id}>
                            </Image>
                        )
                    }
                }
                )
                }
                {renderTitle('4dxFYquMLEG3UQvDiCKS8A')}
            </div>
            <div className={styles.cards}>
                {contentfulData && contentfulData?.includes?.Asset?.map((asset) => {
                    if (asset.sys.id === '4mKPrdHCD0HCi93hgvar6G') {
                        const imageUrl = 'https:' + asset.fields.file.url
                        return (
                            <Image src={imageUrl} width={144} height={144} alt='category7' key={asset.sys.id}>
                            </Image>
                        )
                    }
                }
                )
                }

                {renderTitle('5ikGRgtNGXtwR2nYYN5mXl')}
            </div>
            <div className={styles.cards}>
                <iframe width="192" height="192" src="https://www.youtube.com/embed/DMQ0-ENXxZg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    </div>

</>)
}

export default Categories