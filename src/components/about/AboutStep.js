const AboutStep = ({ id, icon, title, text }) => {
    return (
        <article key={id} className="about-steps">
            <i className={icon}></i>
            <h3>{title}</h3>
            <p>{text}</p>
            <span>0{id}</span>
        </article>
    );
};
export default AboutStep;