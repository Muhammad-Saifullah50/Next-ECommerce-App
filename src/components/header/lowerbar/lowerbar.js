import Image from 'next/image'
import Link from 'next/link'

const lowerbar = () => {

    return (<>

        <div className="lowerbar flex justify-between items-center">
            <div className="logobox w-1/2">
                <Image className="logo" src="/images/logo1.png" width={100}
                    height={80} alt='logo'>

                </Image>
            </div>

            <div className="search hidden md:flex">
                <input type="text" className="search" placeholder="      I am looking for ..." />

                <Image className="searchicon" src="/images/search.png" width={15} height={15} alt='search icon'>
                </Image>
            </div>

            <div className="cartbox flex justify-between">
                <Link href='/cartPage/CartPage'>
                    <div className="carttext">&nbsp;Shopping Cart</div>
                    <div className="cartimg">
                        <Image src="/images/cart1.png" width={25} height={23} alt='cart'>
                        </Image>
                    </div>
                </Link>
            </div>
        </div>


    </>)
}

export default lowerbar