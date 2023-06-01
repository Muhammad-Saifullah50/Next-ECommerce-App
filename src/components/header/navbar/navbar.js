import Link from 'next/link'

const navbar = () => {

    return (<>
        <nav >
            <ul className="navbar border-2 border-orange-500 flex bg-yellow-500 justify-evenly">
                
                <Link href='/'><li className=' list-none py-2 px-7 mx-1 my-0 bg-yellow-500 rounded-sm text-center w-auto hover:bg-black  text-black'>Home</li></Link>
                
                <Link href='/categoriesPage/CategoriesPage'><li className=' list-none py-2 px-7  my-0 bg-yellow-500 rounded-sm text-center w-auto hover:bg-black  text-black'>Categories</li></Link>
                
                <Link  className='' href='/cartPage/CartPage'>
                    <li className=" hidden sm:block list-none py-2 px-7  my-0 bg-yellow-500 rounded-sm text-center w-auto hover:bg-black  text-black" >My Cart</li>
                    </Link>

                <li className='list-none py-2 px-7  my-0 bg-yellow-500 rounded-sm text-center w-auto hover:bg-black  text-black'>Attributes</li>
            </ul>
        </nav>
    </>)
}

export default navbar




