import "./Navbar.css";
// import {FiPhoneCall} from "react-icons/fi";

const Navbar=()=>{
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <h1>
                        Hotel<span>Rent</span>
                    </h1>
                </div>
                <div className="navbar-info">
                    <div className="navbar-info-icon">
                        <i className="fa-solid fa-phone-volume"></i>
                    </div>
                    <div className="navbar-info-details">
                        <p>Call us to get expert advice</p>
                        <h2>0123 456 789</h2>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;