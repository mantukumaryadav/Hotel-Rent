const Property=({ title, image, option })=>{
    return(
        <article className="property">
            <img src={image} alt={title} />
            <div className="property-info">
                <span>{option}</span>
                <h3>{title}</h3>
            </div>
        </article>
    );
};
export default Property;