import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";


function Footer(){
  return(
    <>
      <hr />
    <div className="footer-content">
    
      <div className="icons">
       <FaGithub size={40}/>
       <FaTwitter size={40}/>
       <TiSocialFacebookCircular size={40}/>
       <SlSocialInstagram size={40}/>
      </div>
    </div>
    </>
  )
}

export default Footer;