import "./HorizontalCarousel.css"

const CarouselCard = ({name, image, content, cardStyle}) => {
    return(
        <div className={`card ${cardStyle}`}>
            <img src={image} alt={name} className="imageSize"/>
        </div>
    )
}

export default CarouselCard;