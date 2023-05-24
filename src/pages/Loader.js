import styles from '@/styles/loader.module.css'
import { ThreeCircles } from 'react-loader-spinner'


import Image from 'next/image'
const Loader = () => {

    return (<>
        <div className={styles.loader}>
            <div className={styles.logo}>
                <Image src='/images/dewaltlogo.png' height={250} width={500} alt='logo'>

                </Image>
            </div>
            <div className={styles.circles}>
                <ThreeCircles
                    height="90"
                    width="90"
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor="#e3b212"
                    innerCircleColor="black"
                    middleCircleColor="#e3b212"
                />
            </div>
        </div>
    </>

    )
}
export default Loader