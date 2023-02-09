import "../SSPage/ssPage.css"
import ScrollToTop from "../../Components/ScrollToTop";
import SSHero from "../../Components/SSHero/ssHero";
import LWC from "../../Components/LWC/lwc";
import Footer from "../../Components/Footer/footer"
import contactUs from "../../Images/ContactUs.PNG";
import guideMe from "../../Images/GuideMe.PNG";
import pageInfo from "../../Images/PageInfo.PNG"
import Navbar from "../../Components/Navbar/navbar";

export default function SSPage() {
    return (
        <div className="ssPage">
            <ScrollToTop/> 
            <Navbar state="none" pageName="7Summits"/>
            <SSHero/>
            <LWC image="right" title="Contact Us" description="Contact Us displays actionable contact information for an organization." lwcImage={contactUs} btnLabel="View on AppExchange" url="https://appexchange.salesforce.com/listingDetail?listingId=a0N3A00000FMiCNUA1&tab=e"></LWC>
            <LWC image="left" title="Guide Me" description="The Guide Me application walks users through a visual tutorial." lwcImage={guideMe} btnLabel="View on AppExchange" url="https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FMiCIUA1"></LWC>
            <LWC image="right" title="Page Info" description="The Page Info application helps users quickly understand and navigate a community or pages within a community." lwcImage={pageInfo} btnLabel="View on AppExchange" url="https://appexchange.salesforce.com/listingDetail?listingId=a0N3A00000FMiCSUA1&tab=e"></LWC>
            <Footer/>
        </div>
    )
}