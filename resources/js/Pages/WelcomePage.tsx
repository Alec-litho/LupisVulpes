import Layout from "../Layouts/Layout";
import "../../css/pages/welcomePage.scss";
import "../../css/commonStyle.css"
import Header from "@/Components/Header";
import AboutMeComponent from "@/Components/AboutMe";
import ProjectSliderComponent from "@/Components/ProjectReview";
import MiniGalleryComponent from "@/Components/MiniGallery";
import AnimationGallerySliderComponent from "@/Components/AnimationGalleryPreview";


export default function WelcomePage({props}:{props:any}) {


    return (
        <div className="welcomePage">
            <Header/>
                <div className="bodyContent">
                    <div className="mainWrapper">
                        <WelcomeComponent/>
                        <AboutMeComponent/>
                    </div>
                    <div className="fullWidthWrapper">
                        <ProjectSliderComponent/>
                    </div>
                    <div className="mainWrapper">
                        <MiniGalleryComponent/>
                    </div>
                    <div className="fullWidthWrapper">
                        <AnimationGallerySliderComponent/>                    
                    </div>
                </div>
            <div className="footer">

            </div>
        </div>
    )
}

function WelcomeComponent() {


    return (
        <div className="WelcomeComponent">
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>

            </div>
        </div>
    )
}

