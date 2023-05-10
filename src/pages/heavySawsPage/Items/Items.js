import styles from '@/styles/global-items.module.css'
import { useContext } from 'react'
import dataContext from '@/context/dataContext'
import { renderTitle, renderImage, renderPrice, renderRating } from '@/pages/bandSawsPage/Items/Items'

const Items = () => {
    const contentfulData = useContext(dataContext)
    console.log(contentfulData)
    return (<>
        <div className={styles.itembox}>
            <div className={styles.items}>
                {renderTitle('3u6K7kVh5sPkGN2hKvwSi8', contentfulData)}
                {renderImage()}
                {renderPrice('3u6K7kVh5sPkGN2hKvwSi8', contentfulData)}
                {renderRating('3u6K7kVh5sPkGN2hKvwSi8', contentfulData)}
            </div>
            <div className={styles.items}>
            {renderTitle('6rQjZ1rSswD57AUiTVyOlg', contentfulData)}
                {renderImage()}
                {renderPrice('6rQjZ1rSswD57AUiTVyOlg', contentfulData)}
                {renderRating('6rQjZ1rSswD57AUiTVyOlg', contentfulData)}
            </div>
            <div className={styles.items}>
            {renderTitle('4LSZZkLcgcwDmZeSTkvIld', contentfulData)}
                {renderImage()}
                {renderPrice('4LSZZkLcgcwDmZeSTkvIld', contentfulData)}
                {renderRating('4LSZZkLcgcwDmZeSTkvIld', contentfulData)}
            </div>
            <div className={styles.items}>
            {renderTitle('1WcsUOH8ngdpUZU7u0CqQB', contentfulData)}
                {renderImage()}
                {renderPrice('1WcsUOH8ngdpUZU7u0CqQB', contentfulData)}
                {renderRating('1WcsUOH8ngdpUZU7u0CqQB', contentfulData)}
            </div>
        </div>
    </>)
}
export default Items