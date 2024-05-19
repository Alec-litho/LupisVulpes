import "../../css/components/AboutMe.scss"


export default function AboutMeComponent() {


    return (
        <div className="AboutMeComponent">
            <h1 className="headerText">ABOUT ME</h1>
            <div className="leftSideComponent">
                <img className="rightSideComponent__img" src="./images/artist_img.png"></img>
                <p className="rightSideComponent__text">I'm 22 years old, animator and storyteller- I love creating shows and characters and I to make a show on tv one day. I am currently developing a show called Home Grown Dogs. It's about aliens and dogs and it'll be musical and funny. My family is the bomb.com and I love them! Thank you for stopping by my page</p>
                <div className="rightSideComponent__links">
                    <img src='./icons/twitter.svg' className="rightSideComponent__link"></img>
                    <img src='./icons/youtube.svg' className="rightSideComponent__link"></img>
                    <img src='./icons/deviantart.svg' className="rightSideComponent__link"></img>
                </div>
            </div>
            <div className="rightSideComponent">
                <img src="./images/aboutme_component_character.png"></img>
            </div>
        </div>
    )
}