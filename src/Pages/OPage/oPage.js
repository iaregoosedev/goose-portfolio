import "../SSPage/ssPage.css"
import ScrollToTop from "../../Components/ScrollToTop";
import Footer from "../../Components/Footer/footer"
import LLHero from "../../Components/LLHero/llHero";
import Navbar from "../../Components/Navbar/navbar";

export default function OPage() {
    return (
        <div className="ssPage">
            <ScrollToTop/> 
            <Navbar state="none" pageName="OLIMP"/>
            <div style={{display: 'flex', flexDirection:'column',height: 'calc(100vh - 364px)', display:'flex', alignItems:'center', justifyContent:'center', paddingTop: '124px'}}>
               <img alt='Goose Gif' src={require('../../Images/goose.gif')}></img>
               Coming Soon... 
            </div>
            <Footer/>
        </div>
    )
}