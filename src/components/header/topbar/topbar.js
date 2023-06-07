import Image from 'next/image'
import Link from 'next/link'
const topbar = () => {

    return (<>

        <div className="topbar flex w-auto h-[5vh] bg-black text-white justify-around ">
            <div className="phno hidden sm:flex  items-center text-center">
                <Image className="phone invert mt-[6px] ml-2 mb-2" src="/images/phone.png" width={15} height={15} alt="phone">
                </Image>
                &nbsp;+1234567890
            </div>

            <div className="timing hidden md:flex w-fit md:w-auto justify-between items-center  text-center">
                <Image className="clock" src="/images/clock.jpg" width={15} height={15} alt='clock'>

                </Image>
                &nbsp; Mon - Sun 8:00 am - 5:00 pm
            </div>
            <div className="sidebox  flex w-auto justify-center items-center mt-1">
                <ul className="topnav  flex justify-between list-none">
                    <li className='hidden md:block pr-5 hover:underline'>ENG</li>
                    <Link className='no-underline text-white' href='/aboutPage/AboutPage'>
                        <li className='pr-5 hover:underline'>About Us</li> </Link>
                    <li className='pr-5 hover:underline'>Customer Service</li>
                    <li className='pr-5 hover:underline '>Login</li>
                </ul>
            </div>
        </div>
    </>)
}

export default topbar