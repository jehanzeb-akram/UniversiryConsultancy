import "./thankyou.css";
import img1 from "../../assets/Homepage/Contact/Group1.png";

export default function Thankyou() {
    return(
        <div className="thankyou">
            <div className="thankyou1">
                <img src={img1} alt=""></img>
                <h1>Thank you for Contacting Us!</h1>
                <h2>We will get back to you soon.</h2>
            </div>
        </div>
    )
}