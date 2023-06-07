import Image from 'next/image'
const Bottombar = () => {

    return (<>
        <div className="bottombar flex justify-evenly text-slate-200 h-96 bg-[url('/images/black.jpg')] bg-no-repeat sm:pt-10 ">

            <div className="text w-1/2 ml-2  ">
                <Image className='my-2 invert ' src="/images/logo1.png" height={100} width={150} alt='logo'></Image>
                <figcaption className='text-yellow-500'>Guranteed Tough</figcaption>
                <p className='mt-2'>Dewalt Product Company is formwed with plant and offices in the Leola, Pennsylvania. Thier product is a n electric universal woodworking machine known as the DEWALT Wonder Worker.</p>
                <p>DEWALT Products Co. moves to a new, and for those days, an oustandingly modern plant. </p>
            </div>
            <div className="categories hidden lg:block w-fit mt-14 ml-4 sm:mt-14 ">
                <h4 className='text-yellow-500'>Categories</h4>
                <li className='list-none'>Compressors</li>
                <li className='list-none'>Polishers</li>
                <li className='list-none'>Saws</li>
                <li className='list-none'>Service Tools</li>
            </div>
            <div className="links hidden sm:block w-fit mt-14 ml-4 sm:mt-14">
                <h4 className='text-yellow-500'>Quick Links</h4>
                <li className='list-none'>Our Contacts</li>
                <li className='list-none'>Privacy Policy</li>
                <li className='list-none'>Conditions</li>
                <li className='list-none'>FAQs</li>
                <li className='list-none'>Terms</li>
                <li className='list-none'>Fair Use Policy</li>
            </div>
            <div className="address w-fit mt-14 ml-4 sm:mt-14">
                <h4 className='text-yellow-500'>Where we are</h4>
                <p>DeWalt BV</p>
                <p>info@dewalt.eu</p>
                <p>2150 BA Niew-Vennep</p>
                <p>The Netherlands</p>
                <p>Tel: 1234567890</p>
            </div>

        </div>
        <div className="basebox  text-slate-200 bg-[url('/images/black.jpg')] bg-no-repeat opacity-80">
            <ul className="basebar flex justify-evenly ">
                <li className='px-1'><p>Dewalt. All Rights Reserved</p> </li>
                <li className='px-1'>Privacy Policy</li>
                <li className='px-1'>Terms and Conditions</li>
                <li className='px-1'>Contact Us</li>
            </ul>

        </div>
    </>)
}

export default Bottombar

