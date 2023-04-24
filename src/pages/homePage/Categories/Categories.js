import styles from '@/styles/categories.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Categories = () => {

    const [contentfulData, setContentfulData] = useState({});

    const apiData = async () => {
        const response = await fetch(`https://cdn.contentful.com/spaces/25h38m57z8zs/entries?access_token=0G9TBJln4K0otkAUEV1f2uT90L0R5kWG6qFoNvmkiT4`);

        const result = await response.json()
        setContentfulData(result)
    }
    // use effect takes two parameters, a callback function and an emopty array

    useEffect(() => {
        apiData();
    }, [])


    return (<>
        <div className={styles.heading}>
            <h2>Select a category to get started</h2>
        </div>
        <div className={styles.categories}>

            <div className={styles.cardgrid}>
                <div className={styles.cards}>
                    <Image src="/images/category1.png" width={144} height={144}>
                    </Image>


                    {contentfulData && contentfulData?.items?.map((item) => {
                        console.log(contentfulData.items[1])
                        return (
                            <p>{contentfulData.items[0].fields.title}</p>
                        )

                    })}


                </div>

                <div className={styles.cards}>
                    <Image src="/images/category2.png" width={144} height={144}>

                    </Image>
                    <p>Rotary Compressor</p></div>
                <div className={styles.cards}>
                    <Image src="/images/toolbox.png" width={144} height={144}>
                    </Image>
                    <p>Multipurpose Tool Box</p>
                </div>
                <div className={styles.cards}>
                    <Image src="/images/category4.png" width={144} height={144}>

                    </Image>
                    <p>Heayv Duty Stapler</p>
                </div>

                <div className={styles.cards}>
                    <Image src="/images/category3.png" width={144} height={144}>

                    </Image>
                    <p>Heavy Duty Polisher</p>

                </div>
                <div className={styles.cards}>
                    <Image src="/images/category6.png" width={144} height={144}>

                    </Image>
                    <p>Heavy Duty Angle Grinder</p>

                </div>
                <div className={styles.cards}>
                    <Image src="/images/category5.png" width={144} height={144}>

                    </Image>
                    <p>Heavy Duty Air Blower</p>

                </div>
                <div className={styles.cards}>
                    <iframe width="192" height="192" src="https://www.youtube.com/embed/DMQ0-ENXxZg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>

    </>)
}

export default Categories