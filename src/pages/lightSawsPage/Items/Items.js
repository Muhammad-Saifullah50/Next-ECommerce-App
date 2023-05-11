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
                <div className={styles.heading}>
                    {renderTitle('3u6K7kVh5sPkGN2hKvwSi8', contentfulData)}

                    <div className={styles.rateprice}>

                        {renderPrice('3u6K7kVh5sPkGN2hKvwSi8', contentfulData)}
                        {renderRating('3u6K7kVh5sPkGN2hKvwSi8', contentfulData)}

                    </div>

                    <button className={styles.button}>Read More</button>

                </div>

                <div className={styles.image}>
                    {renderImage('', 'alt', contentfulData)}
                </div>

            </div>
            <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('6rQjZ1rSswD57AUiTVyOlg', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('6rQjZ1rSswD57AUiTVyOlg', contentfulData)}
                            {renderRating('6rQjZ1rSswD57AUiTVyOlg', contentfulData)}

                        </div>
                        
                        <button className={styles.button}>Read More</button>

                    </div>

                    <div className={styles.image}>
                        {renderImage('', 'alt', contentfulData)}
                    </div>

                </div>
                <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('4LSZZkLcgcwDmZeSTkvIld', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('4LSZZkLcgcwDmZeSTkvIld', contentfulData)}
                            {renderRating('4LSZZkLcgcwDmZeSTkvIld', contentfulData)}

                        </div>
                        
                        <button className={styles.button}>Read More</button>

                    </div>

                    <div className={styles.image}>
                        {renderImage('', 'alt', contentfulData)}
                    </div>

                </div>
                <div className={styles.items}>
                    <div className={styles.heading}>
                        {renderTitle('1WcsUOH8ngdpUZU7u0CqQB', contentfulData)}

                        <div className={styles.rateprice}>

                            {renderPrice('1WcsUOH8ngdpUZU7u0CqQB', contentfulData)}
                            {renderRating('1WcsUOH8ngdpUZU7u0CqQB', contentfulData)}

                        </div>
                        
                        <button className={styles.button}>Read More</button>

                    </div>

                    <div className={styles.image}>
                        {renderImage('', 'alt', contentfulData)}
                    </div>

                </div>
        </div>
    </>)
}
export default Items






