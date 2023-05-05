import styles from '@/styles/categories.module.css'
import Image from 'next/image'
import { useContext } from "react"
import dataContext from "@/context/dataContext"

const Categories = () => {

    const contentfulData = useContext(dataContext)


    // this function will render title of our categories.

     const renderTitle = (id) => {
        const item = contentfulData?.items?.find((item) => item.sys.id === id)
        return item ? <p key={item.sys.id}>{item?.fields?.title}</p> : null

    }

    // this function will render the image of our category

    const renderImage = (id, alt) => {
        const asset = contentfulData?.includes?.Asset?.find(asset => asset.sys.id === id)

        if (asset) {
            const imageUrl = 'https:' + asset.fields.file.url

            return <Image src={imageUrl} width={144} height={144} alt={alt} key={asset.sys.id} />

        }

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
                    {renderImage('Qybq2kbrlxWZ7FcK0WUPd', 'category2')}

                    {renderTitle('6cYafFjpZfFxLQNjCpTjfH')}
                </div>

                <div className={styles.cards}>
                    {renderImage('28uDfdCuQxxxuzCMwiXQWT', 'category3')}

                    {renderTitle('3KTDuJ3m402V1aTV2uSfzG')}
                </div>

                <div className={styles.cards}>

                    {renderImage('6M9cqMoRwwyoTrGWdpgyFl', 'category4')}

                    {renderTitle('NmWKEav8HzjwCBl0Z4qQI')}

                </div>

                <div className={styles.cards}>

                    {renderImage('3cv9gZ8URV4IiI6lpmHKBE', 'category5')}

                    {renderTitle('4jMnuJn55XLgI5uK6zJVQT')}

                </div>
                <div className={styles.cards}>
                    {renderImage('1thaKzAhUAhdU3jf2XzW7w', 'category6')}

                    {renderTitle('4dxFYquMLEG3UQvDiCKS8A')}
                </div>

                <div className={styles.cards}>
                    {renderImage('4mKPrdHCD0HCi93hgvar6G', 'category7')}

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