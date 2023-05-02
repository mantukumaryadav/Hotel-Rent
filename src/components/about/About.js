import "./About.css";
import aboutImg from "../../images/aboutImg.jpg";
import { steps } from "../../data";
import AboutStep from "./AboutStep";

const About = () => {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-container-section-1">
                    <h2>Quick and simple process to search properties</h2>
                    <img src={aboutImg} alt="Image" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut laboreet dolore</p>
                    <button>Get started now</button>
                </div>

                <div className="about-container-section-2">
                    {
                        steps.map((item) => {
                            return (
                                <AboutStep key={item.id}
                                id={item.id}
                                icon={item.icon}
                                title={item.title}
                                text={item.text}/>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    );
};
export default About;