import NavBar from "../organs/Navbar/Navbar";
import Footer from "../organs/Footer/Footer";
import HeroSection from "../organs/HeroSection/HeroSection";
import Services from "../organs/Services/Services";
import Drugs from "../organs/Drugs/Drugs";
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