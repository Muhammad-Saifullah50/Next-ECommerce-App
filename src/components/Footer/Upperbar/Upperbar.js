
const Upperbar = () => {

    return (<>
        <div className=" hidden newsletter sm:flex justify-between w-[95%] bg-yellow-500 relative z-30 rounded-lg mx-auto top-8 h-20 items-center">
            <div className="text ml-5">
                <h3 className="text-xl font-semibold
                ">Subscribe to our Newsletter</h3>
                <p>We dont share your info with 3rd parties</p>
            </div>

            <div className="input hidden md:flex flex-col lg:flex-row">
                <div className="email">
                <label htmlFor="email">Email: </label>
                <input type="text" placeholder='Enter your email address' id='email' />
                </div>
                <div className="agreement lg:ml-5">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox">I agree to the terms and conditions</label>
                </div>
            </div>

            <button className="btn mr-5 bg-black text-yellow-500 px-2 py-2 rounded-md">Subscribe</button>
        </div>
    </>)
}
export default Upperbar
