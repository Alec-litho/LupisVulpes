import { useEffect, useRef, useState } from "react"
import "../../css/components/MiniGallery.scss"
import axios from "axios"
import anime from "animejs";

export default function MiniGalleryComponent() {
    const [searchedArts, setSearchedArts] = useState<Art[] | []>([]);
    const charactersInput = useRef<HTMLInputElement|null>(null);
    const raceInput = useRef<HTMLSelectElement|null>(null);
    const showInput = useRef<HTMLSelectElement|null>(null);
    const yearInput = useRef<HTMLSelectElement|null>(null);
    const commissionInput = useRef<HTMLInputElement|null>(null);
    const plushieInput = useRef<HTMLInputElement|null>(null);
    const animationClipInput = useRef<HTMLInputElement|null>(null);

    const menuBar = useRef<HTMLDivElement|null>(null);

    useEffect(() => {
        menuBar.current?.addEventListener("mouseover", function(e) {
            const element = e.target as HTMLElement
            console.log(element)
            if(element.className === "MiniGalleryComponent__menuBar") {
                anime({
                    targets: e.target,
                    translateY: -200,
                    easing: 'easeInOutQuad',
                    height: "500px",
                    duration: 1000
                  });
            }
           
        })
        menuBar.current?.addEventListener("mouseleave", function(e) {
            const element = e.target as HTMLElement
            if(element.className === "MiniGalleryComponent__menuBar") {
            anime({
                targets: e.target,
                translateY: 200,
                easing: 'easeInOutQuad',
                height: "200px",
                duration: 1000


              });
            }
        })
        
    },[])


    function searchArts(filters:ArtFilters) {
        
    }

    return (
        <div className="MiniGalleryComponent">
            {searchedArts.length!==0?
            <div className="MiniGalleryComponent__reviewWindow">
{                    searchedArts.map((imageUrl, indx) => {
                        return <img src={imageUrl.sourceLink} className={`MiniGalleryComponent__img${indx}`}></img>
                    })
                }
            </div>
            :
            <div className="MiniGalleryComponent__emptyWindow"></div>
            }
            <div className="MiniGalleryComponent__menuBar" ref={menuBar}>
                <div className="menu_header">
                    <h1>Filters</h1>
                </div>
                <div className="menu_filters">
                    <div className="textTypeFilters">
                        <div className="filter">
                            <h2>Characters</h2>
                            <input ref={charactersInput}></input>
                        </div>
                        <div className="filter">
                            <h2>Show</h2>
                            <select ref={showInput}>
                                <option value="Captain and his crew">Captain and his crew</option>
                                <option value="The Audience">The Audience</option>
                                <option value="Home grown dogs">Home grown dogs</option>

                            </select>
                        </div>
                        <div className="filter">
                            <h2>Race</h2>
                            <select ref={raceInput}>
                                <option value="wolf">wolf</option>
                                <option value="rabbit">rabbit</option>
                                <option value="ferret">ferret</option>
                                <option value="human">human</option>
                                <option value="furry">furry</option>
                                <option value="dragon">dragon</option>
                                <option value="pony">pony</option>
                                <option value="alien">alien</option>
                            </select>
                        </div>
                        <div className="filter">
                            <h2>Year</h2>
                            <select ref={yearInput}>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                            </select>
                        </div>
                    </div>
                    <div className="checkboxTypeFilters">
                        <div className="filter">
                            <h2>Commission</h2>
                            <input type="checkbox" ref={commissionInput}></input>
                        </div>
                        <div className="Plushie">
                            <h2>Plushie</h2>
                            <input type="checkbox" ref={plushieInput}></input>
                        </div>
                        <div className="AnimationClip">
                            <h2>Animation clip</h2>
                            <input type="checkbox" ref={animationClipInput}></input>
                        </div>
                    </div>
                  
                </div>
                <div className="finishBar">
                    <button>Search</button>
                    <a>get more filters...</a>
                </div>
            </div> 
        </div>
    )
}