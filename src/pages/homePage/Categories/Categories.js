import styles from '@/styles/categories.module.css'
import Image from 'next/image'

const Categories = () => {

    return (<>
        <div className={styles.heading}>
            <h2>Select a category to get started</h2>
        </div>
        <div className={styles.categories}>

            <div className={styles.cardgrid}>
                <div className={styles.cards}>
                    <Image src="/images/category1.png" width={144} height={144}>

                    </Image>
                    <p>Heavy Duty Saws</p>


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
                    <iframe width="192" height="192" src="https://www.youtube.com/embed/DMQ0-ENXxZg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>

    </>)
}

export default Categories