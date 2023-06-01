// import styles from '@/styles/topbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
const topbar = () => {

    return (<>

        <div className="topbar flex w-[100vh] h-[5vh] bg-black text-white">
            <div className="phno hidden sm:block w-[20vw] text-center">
                <Image className="phone invert mt-[6px]" src="/images/phone.png" width={15} height={15} alt="phone">
                </Image>
                &nbsp;+1234567890

            </div>
            <div className="timing hidden md:block w-[40vw] text-center">
                <Image className="clock mt-[6px]" src="/images/clock.jpg" width={15} height={15} alt='clock'>

                </Image>
                &nbsp; Mon - Sun 8:00 am - 5:00 pm
            </div>
            <div className="sidebox w-[39vw mt-1]">
                <ul className="topnav md:absolute md:right-1 flex justify-between list-none">
                    <li className='hidden md:block border-[1px] border-gray-400 pr-5 hover:underline'>ENG</li>
                    <Link className='no-underline text-white' href='/aboutPage/AboutPage'>   <li>About Us</li> </Link>
                    <li className='border-[1px] border-gray-400 pr-5 hover:underline'>Customer Service</li>
                    <li className='pr-5 hover:underline '>Login</li>
                </ul>
            </div>
        </div>
    </>)
}

export default topbar