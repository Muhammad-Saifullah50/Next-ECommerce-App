import Image from 'next/image'
import Link from 'next/link'

const lowerbar = () => {

    return (<>

        <div className="lowerbar flex justify-between items-center h-12">
            <div className="logobox w-1/3">
                <Image className="logo h-10 m-auto md:w-44" src="/images/logo1.png" width={100}
                    height={80} alt='logo'>

                </Image>
            </div>

            <div className="search hidden md:flex w-1/2 justify-center">
                <input type="text" className="search h-7" placeholder="      I am looking for ..." />

                <Image className="searchicon ml-4" src="/images/search.png" width={15} height={15} alt='search icon'>
                </Image>
            </div>

            <div className="cartbox flex justify-center w-1/2 mr-5">
                <Link href='/cartPage/CartPage'>
                    <div className="carttext w-full flex justify-between m-auto ">&nbsp;Shopping Cart

                        <Image  className='ml-4' src="/images/cart1.png" width={25} height={23} alt='cart'>
                        </Image>
                    </div>
                </Link>

            </div>

        </div >


    </>)
}

export default lowerbar