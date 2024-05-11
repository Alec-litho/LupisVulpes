import Layout from "../Layouts/Layout";
import "../../css/welcomePage.css";
import "../../css/commonStyle.css"
import Header from "@/Components/Header";


export default function WelcomePage({props}:{props:any}) {


    return (
        <div className="welcomePage">
            <Header/>
            <div className="mainWrapper">
                <div className="bodyContent">
                    <WelcomeComponent/>
                    <AboutMeComponent/>
                    <ProjectReviewComponent/>
                    <MiniGalleryComponent/>
                    <AnimationsSlider/>
                </div>
                <div className="footer">

                </div>
            </div>
        </div>
    )
}


function AboutMeComponent() {


    return (
        <div className="AboutMeComponent">
            <div className="contentWrapper">

            </div>
        </div>
    )
}

function WelcomeComponent() {


    return (
        <div className="WelcomeComponent">

        </div>
    )
}
function ProjectReviewComponent() {
    return (
        <div className="WelcomeComponent">

        </div>
    )
}
function MiniGalleryComponent() {
    return (
        <div className="WelcomeComponent">

        </div>
    )
}
function AnimationsSlider() {
    return (
        <div className="WelcomeComponent">

        </div>
    )
}