import styles from '@/styles/navbar.module.css'

const navbar = () => {

    return(<>
    <nav>
        <ul className={styles.navbar}>
            <li>Home</li>
            <li>Categories</li>
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