import "../../css/components/MiniGallery.scss"


export default function MiniGalleryComponent() {
    
const testImages: [] = [
    // "./images/miniGalleryComponent_images/1.png",
    // "./images/miniGalleryComponent_images/2.png",
    // "./images/miniGalleryComponent_images/3.png"
]
    return (
        <div className="MiniGalleryComponent">
            {testImages.length!==0?
            <div className="MiniGalleryComponent__reviewWindow">
{                    testImages.map((imageUrl, indx) => {
                        return <img src={imageUrl} className={`MiniGalleryComponent__img${indx}`}></img>
                    })
                }
            </div>
            :
            <div className="MiniGalleryComponent__emptyWindow"></div>
            }
            <div className="MiniGalleryComponent__menuBar">
                <div className="menu_header">
                    <h1>Filters</h1>
                </div>
                <div className="menu_filters">

                </div>
            </div>
        </div>
    )
}