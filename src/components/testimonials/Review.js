const Review = ({ id, name, profession, text, image, incrementIndex, decrementIndex }) => {
    return (
        <article className="review">
            <div className="prev">
                <i className="fa-solid fa-circle-chevron-left"
                    onClick={decrementIndex}></i>
            </div>
            <div className="review-info">
                <img src={image} alt={name} />
                <div className="person-details">
                    <h3>{name}</h3>
                    <p className="profession">{profession}</p>
                    <p>{text}</p>
                </div>
            </div>
            <div className="next">
                <i className="fa-solid fa-circle-chevron-right"
                    onClick={incrementIndex}></i>
            </div>
        </article>
    );
};
export default Review;