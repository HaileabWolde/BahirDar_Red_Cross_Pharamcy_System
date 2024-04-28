import NavBar from "../organs/HomeSection/Navbar/Navbar";
import Footer from "../organs/HomeSection/Footer/Footer";
import HeroSection from "../organs/HomeSection/HeroSection/HeroSection";
import Services from "../organs/HomeSection/Services/Services";
import Drugs from "../organs/HomeSection/Drugs/Drugs";
const Home = ()=>{
    return (
        <>
            <NavBar/>
            <HeroSection/>
            <Services/>
            <Drugs/>
            <Footer/>
        </>
    ) }
export default Home;