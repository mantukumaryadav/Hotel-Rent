import { socialLinks } from "../../data";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <ul>
                    {
                        socialLinks.map((item) => {
                            return (
                                < li key={item.id} >
                                    <a href={item.href}>
                                        <i className={item.icon}></i>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="underline"></div>
                <h3>HotelRent - landing pages &#169; 2023</h3>
                <div className="links">
                    <p>Privacy Policy</p>
                    <p>About Us</p>
                    <p>Terms and Conditions</p>
                    
                </div>
            </div>
        </footer >
    );
};
export default Footer;