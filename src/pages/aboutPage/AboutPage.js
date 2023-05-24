import styles from '@/styles/global-category-pages.module.css'
import textstyles from '@/styles/about.module.css'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
const AboutPage = () => {

    return (<>
        <Header />
        <div className={styles.banner}>
            <h2> About Us </h2>
        </div>
        <div className={textstyles.container}>
            <h1>Welcome to DEWALT: Powering Your Success</h1>
            <p>At DEWALT, we believe in empowering individuals and professionals with the tools they need to achieve their greatest potential. For over a century, we have been at the forefront of innovation in the construction and manufacturing industries, providing top-quality power tools, accessories, and solutions that are trusted by tradespeople worldwide.</p>
            <h2>Our Commitment to Excellence</h2>
            <p>At the heart of our company lies a steadfast commitment to excellence. We understand that success is built on a foundation of reliability, durability, and performance. That's why every DEWALT product is designed and engineered to deliver exceptional results, even in the most demanding environments. From our legendary cordless drills to our advanced cutting-edge technology, we continuously strive to exceed your expectations.

            </p>
            <h2>Unleashing the Power of Innovation:</h2>
            <p>DEWALT has always been synonymous with innovation. We invest heavily in research and development, constantly pushing the boundaries of what is possible in power tool technology. Our team of engineers and designers work tirelessly to develop new features, improve efficiency, and enhance user experience. We listen to the needs of professionals like you, ensuring that our products address the challenges you face on the job site.</p>
            <h2>A Comprehensive Range of Solutions:</h2>
            <p>No matter the task at hand, DEWALT offers a comprehensive range of solutions to meet your specific needs. From power tools and hand tools to accessories and storage solutions, we have everything you require to tackle any project with confidence. Our diverse product lineup spans across categories such as drilling, cutting, fastening, woodworking, metalworking, and more, allowing you to find the right tool for the job.</p>
            <h2>Building a Community of Professionals:</h2>
            <p>At DEWALT, we believe in the power of community. We are dedicated to connecting professionals from all walks of life, creating a space for sharing knowledge, insights, and experiences. Our online platform and social media channels provide opportunities for collaboration, learning, and networking. Join our community to engage with like-minded individuals and stay updated on the latest trends and technologies in the industry.</p>
            <h2>Service and Support You Can Trust:</h2>
            <p>Our commitment to your success does not end with the purchase of a DEWALT product. We take pride in offering exceptional customer service and support throughout your entire ownership journey. Whether you need assistance with product selection, troubleshooting, or repairs, our knowledgeable team is always here to help. We stand by the quality of our products and provide comprehensive warranties to ensure your satisfaction.</p>
            <h2>Together, We Build:</h2>
            <p>At DEWALT, we recognize that our success is tied to your success. We are honored to play a part in the projects you undertake, the structures you build, and the dreams you bring to life. Together, we build a future that is stronger, more efficient, and filled with endless possibilities.</p>
            <p> <em> Thank you for choosing DEWALT. Let us power your success, together.</em></p>
        </div>
        <Footer />
    </>)
}
export default AboutPage