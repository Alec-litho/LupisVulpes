import '../../css/components/AnimationGalleryPreview.scss'
import textTrimmer from '@/utils/textTrimmer'

export default function AnimationGallerySliderComponent() {
    const animationPreviews = [
        {image:"./images/animationGalleryPreviewSlider_gifs/1.gif", name:"Home Grown Dogs", description:"The plot of this animation is based on one of my side proje of this bthisased is bthisa sed on of this ani "},
        {image:"./images/animationGalleryPreviewSlider_gifs/3.gif", name:"Ho", description:"The plot of this animation is based on one of my side proje"}

    ]

    return (
        <div className="AnimationGalleryReviewComponent">
            <div className="AnimationGalleryReviewComponent_wrapper">
            {
                animationPreviews.map((preview, indx) => {
                    return <div className={indx===1? "animationPreview" : "animationPreview hide"} key={preview.name}>
                                <img src={preview.image} alt="" className="preview" />
                                <div className="animationDescription">
                                    <h1>{textTrimmer(preview.name,11)}</h1>
                                    <p>{textTrimmer(preview.description, 100)}</p>
                                </div>
                         </div>
                })
            }
            </div>

        </div>
    )
}