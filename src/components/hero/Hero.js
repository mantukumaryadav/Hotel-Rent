import "./Hero.css";
import { features, properties } from "../../data";

const gridArr = properties.slice(0, 4);

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <h1>BUY . RENT . SELL</h1>
                <p>Wide range of properties to explore with most trusted and reliable sources.</p>

                <div className="grid-container">
                    {
                        gridArr.map((item) => {
                            return (
                                <div key={item.id} className={`grid-item grid-item-${item.id}`}>
                                    <img src={item.image} alt={item.title} />
                                    <span className="option">{item.option}</span>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="consultation-form">
                    <h2>Book FREE consultation</h2>
                    <form>
                        <input type="text" placeholder="Enter your name" required />
                        <input type="text" placeholder="Enter your phone number" required />
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>

                <div className="features">
                    {
                        features.map((item) => {
                            return (
                                <div key={item.id} className="feature-item">
                                    <i className={item.icon}></i>
                                    <p>{item.title}</p>
                                </div>
                            )

                        })
                    }
                </div>

            </div>

        </section>
    );
};
export default Hero;