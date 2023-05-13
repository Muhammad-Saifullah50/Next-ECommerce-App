import styles from '@/styles/navbar.module.css'
import Link from 'next/link'

const navbar = () => {

    return (<>
        <nav >
            <ul className={styles.navbar}>
                <Link href='/'><li>Home</li></Link>
                <Link href='/categoriesPage/CategoriesPage'><li>Categories</li></Link>
                <li>Implements</li>
                <li>Projects</li>
                <li>Service Tools</li>
                <li>Manuals</li>
                <li>Contacts</li>
                <li id={styles.last}>Attributes</li>
            </ul>
        </nav>
    </>)
}

export default navbar