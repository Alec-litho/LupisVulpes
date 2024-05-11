import "../../css/components/Header.css"



export default function Header() {


    return (
        <div className="header">
            <div className="header__logo">
                <img src="./public/images/header_logo.png" alt="" className="header__logo"/>
            </div>
            <div className="header__navigation">
                <ul className="header__lu">
                    <li className="header__li">
                        <p className="header__navPage_active">About</p>
                    </li>
                    <li className="header__li">
                        <p className="header__navPage">Projects</p>
                    </li>
                    <li className="header__li">
                        <p className="header__navPage">Gallery</p>
                    </li>
                    <li className="header__li">
                        <p className="header__navPage">Animations</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}