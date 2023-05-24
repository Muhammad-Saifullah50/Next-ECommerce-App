import styles from '@/styles/categories.module.css'
import { useContext } from "react"
import dataContext from "@/context/dataContext"
import { renderTitle, renderImage } from '@/pages/bandSawsPage/Items/Items'
import Link from 'next/link'

const Categories = () => {

    const contentfulData = useContext(dataContext)

    return (<>


        <div className={styles.heading}>
            <h2>Select a category to get started</h2>
        </div>
        <div className={styles.categories}>

            <div className={styles.cardgrid}>
                <Link className={styles.link} href='/heavySawsPage/HeavySawsPage'>
                    <div className={styles.cards}>
                        {renderImage('29fPL5QFfyWPxCAZ0pkiQz', 'category1', contentfulData)}

                        {renderTitle('4n8Vxvh6FsM216olF1R6hC', contentfulData)}

                    </div>
                </Link>
                <Link className={styles.link} href='rotaryCompressorPage/RotaryCompressorPage'>
                    <div id={styles.compressor} className={styles.cards}>
                        {renderImage('Qybq2kbrlxWZ7FcK0WUPd', 'category2', contentfulData)}

                        {renderTitle('6cYafFjpZfFxLQNjCpTjfH', contentfulData)}

                    </div>
                </Link>
                <Link className={styles.link} href='toolboxPage/ToolboxPage'>
                    <div id={styles.toolbox} className={styles.cards}>
                        {renderImage('28uDfdCuQxxxuzCMwiXQWT', 'category3', contentfulData)}

                        {renderTitle('3KTDuJ3m402V1aTV2uSfzG', contentfulData)}

                    </div>
                </Link>
                <Link className={styles.link} href='staplerPage/StaplerPage'>
                    <div id={styles.stapler} className={styles.cards}>

                        {renderImage('6M9cqMoRwwyoTrGWdpgyFl', 'category4', contentfulData)}

                        {renderTitle('NmWKEav8HzjwCBl0Z4qQI', contentfulData)}

                    </div>
                </Link>
                <Link  className={styles.link} href='polishersPage/PolisherPage'>
                    <div id={styles.polishers} className={styles.cards}>

                        {renderImage('3cv9gZ8URV4IiI6lpmHKBE', 'category5', contentfulData)}

                        {renderTitle('4jMnuJn55XLgI5uK6zJVQT', contentfulData)}

                    </div>
                </Link>
                <Link  className={styles.link} href='angleGrinderPage/AngleGrinderPage'>
                    <div id={styles.grinder} className={styles.cards}>
                        {renderImage('1thaKzAhUAhdU3jf2XzW7w', 'category6', contentfulData)}

                        {renderTitle('4dxFYquMLEG3UQvDiCKS8A', contentfulData)}

                    </div>
                </Link>
                <Link  className={styles.link} href='airBlowerPage/AirBlowerPage'>
                    <div id={styles.blower} className={styles.cards}>
                        {renderImage('4mKPrdHCD0HCi93hgvar6G', 'category7', contentfulData)}

                        {renderTitle('5ikGRgtNGXtwR2nYYN5mXl', contentfulData)}

                    </div>
                </Link>
                <Link href='https://www.youtube.com/embed/DMQ0-ENXxZg'>
                    <div id={styles.video} className={styles.cards}>
                        <iframe className={styles.video} width="192" height="192" src="https://www.youtube.com/embed/DMQ0-ENXxZg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </Link>
            </div>
        </div>

    </>)
}

export default Categories