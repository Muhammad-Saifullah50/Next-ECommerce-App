import styles from '@/styles/navbar.module.css'
import Link from 'next/link'

const navbar = () => {

    return (<>
        <nav >
            <ul className={styles.navbar}>
                <Link href='/'><li>Home</li></Link>
                <Link href='/categoriesPage/CategoriesPage'><li>Categories</li></Link>
                <Link id={styles.cart} href='/cartPage/CartPage'><li>My Cart</li></Link>
                <li>Attributes</li>
            </ul>
        </nav>
    </>)
}

export default navbar