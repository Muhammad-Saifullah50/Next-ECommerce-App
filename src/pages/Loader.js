import styles from '@/styles/loader.module.css'
import { ThreeCircles } from 'react-loader-spinner'


import Image from 'next/image'
const Loader = () => {

    return (<>
        <div className={styles.loader}>
            <Image src='/images/dewaltlogo.png' height={250} width={500} alt='logo'>

            </Image>
            <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    </>

    )
}
export default Loader