import styles from '@/styles/confirmation.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Confirmation = () => {

    return (
        <div className="container flex justify-center items-center flex-col h-[100vh]">
            <Image className='-mt-[15vh] w-[13rem] h-[7rem]' src='/images/dewaltlogo.png' height={250} width={500} alt='logo'>

            </Image>
            <h2 className='mt-5'>Thank You for choosing DeWalt</h2>
            <h3 className=''>Your Items will be delivered to you soon...</h3>
            <Link href='/'>
                <button className="btn bg-yellow-500 hover:bg-yellow-400 text-black px-2 py-1 mt-5 ">
                    Back to Homepage
                </button>
            </Link>
        </div>

    )
}
export default Confirmation