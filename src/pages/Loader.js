import { ThreeCircles } from 'react-loader-spinner'


import Image from 'next/image'
const Loader = () => {

    return (<>
        <div className="loader flex justify-center items-center flex-col h-[100vh]">
            <div className="logo">
                <Image className='-mt-[15vh] w-[13rem] h-[7rem]' src='/images/dewaltlogo.png' height={250} width={500} alt='logo'>

                </Image>
            </div>
            <div className="circles">
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