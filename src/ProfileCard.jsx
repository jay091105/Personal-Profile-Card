import {FaInstagram ,FaLinkedin} from "react-icons/fa";

function ProfileCard(props)
{
    return(
        <div className="profile-card">
            <img src="https://tse4.mm.bing.net/th?id=OIP.7hZeDzBreg4lDuIe0E8iaQHaFg&pid=Api&P=0&h=180" alt="profile" className="profile-img"/>
            <h2>{props.name}</h2>
            <p>{props.id}</p>
            <div className="social-icon">
                <a href="https://www.instagram.com/ariwala_jay_9?utm_source=qr&igsh=bzI5cXBjbHY2OTFz" target="_blank">
                    <FaInstagram size={30} className="icon"/>
                </a>
                <a href="www.linkedin.com/in/jay-ariwala-40b3b3302" target="_blank">
                    <FaLinkedin size={30} className="icon"/>
                </a>
               
            </div>
        </div>
    );
}
export default ProfileCard;