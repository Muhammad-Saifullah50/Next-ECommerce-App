import Link from 'next/link'

const navbar = () => {

    return (<>
        <nav >
            <ul className="navbar  flex bg-yellow-500 justify-evenly relative z-10">
                
                <Link href='/'><li className=' list-none py-2 px-7 mx-1 my-0 bg-yellow-500 rounded-sm text-center w-auto hover:bg-black  text-black hover:text-yellow-500'>Home</li></Link>
                
                <Link href='/categoriesPage/CategoriesPage'><li className=' list-none py-2 px-7  my-0 bg-yellow-500 rounded-sm text-center w-auto hover:bg-black  text-black hover:text-yellow-500'>Categories</li></Link>
                
                <Link  className='' href='/cartPage/CartPage'>
                    <li className=" hidden sm:block list-none py-2 px-7  my-0 bg-yellow-500 rounded-sm text-center w-auto hover:bg-black  text-black hover:text-yellow-500 " >My Cart</li>
                    </Link>

                <li className='list-none py-2 px-7  my-0 bg-yellow-500 rounded-sm text-center w-auto hover:bg-black  text-black hover:text-yellow-500'>Attributes</li>
            </ul>
        </nav>
    </>)
}

export default navbar




