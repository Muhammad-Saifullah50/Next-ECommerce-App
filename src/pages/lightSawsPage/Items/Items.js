import styles from '@/styles/light-saws-items.module.css'
import { useContext } from 'react'
import dataContext from '@/context/dataContext'
import { renderTitle, renderImage, renderPrice, renderRating } from '@/pages/bandSawsPage/Items/Items'

const Items = () => {
    const contentfulData = useContext(dataContext)
    console.log(contentfulData)
    return (<>
        <div className={styles.itembox}>

            <div className={styles.items}>

            </div>
            <div className={styles.items}>
                {renderTitle('3u6K7kVh5sPkGN2hKvwSi8')}
                {renderImage()}
                {renderPrice('3u6K7kVh5sPkGN2hKvwSi8')}
                {renderRating('3u6K7kVh5sPkGN2hKvwSi8')}
            </div>
            <div className={styles.items}>
            {renderTitle('6rQjZ1rSswD57AUiTVyOlg')}
                {renderImage()}
                {renderPrice('6rQjZ1rSswD57AUiTVyOlg')}
                {renderRating('6rQjZ1rSswD57AUiTVyOlg')}
            </div>
            <div className={styles.items}>
            {renderTitle('4LSZZkLcgcwDmZeSTkvIld')}
                {renderImage()}
                {renderPrice('4LSZZkLcgcwDmZeSTkvIld')}
                {renderRating('4LSZZkLcgcwDmZeSTkvIld')}
            </div>
            <div className={styles.items}>
            {renderTitle('1WcsUOH8ngdpUZU7u0CqQB')}
                {renderImage()}
                {renderPrice('1WcsUOH8ngdpUZU7u0CqQB')}
                {renderRating('1WcsUOH8ngdpUZU7u0CqQB')}
            </div>
        </div>
    </>)
}
export default Items