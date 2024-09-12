import Hero from "../../component/hero/Hero"
import Navbar from "../../component/navbar/Navbar"
import Footer  from "../../component/footer/Footer"
import BlogSection from "../../component/blogSection/BlogSection"
export default function Home(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <BlogSection/>
            <Footer/>
           
        </div>
    )
}