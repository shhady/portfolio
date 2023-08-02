import "./App.css";
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaLinkedin ,FaWhatsapp} from 'react-icons/fa';

function App() {
  function sendEmail() {
    console.log('clicked');
    window.location.assign("mailto:shhadyse@gmail.com");
  }

  return (
    <div className="homePageContainer">
      {/* <div className="pictureDiv">
        <div className="thePicture">
          <div className="circleBehindPicture"></div>
        </div>
      </div> */}
      <div className="contentDiv">
      <div className="backgroundImageContainer">
        <div className='aboveImage'></div>
          {/* Background image goes here */}
        </div>
        <div className="Name">Shhady Serhan</div>
        <h2 className="Job">Full Stack <br/> Web Developer</h2>
        <h3 className="tech">Technologies</h3>
        <h4 className="techs"> HTML, CSS, React, Node.js, Express, MongoDB</h4>
      </div>
      <div className="social-icons">
        {/* Removed the surrounding divs */}
        <BsTelephoneFill className="iconPhone" onClick={() => window.open("tel:0543113297", "_blank")} />
        <MdEmail className="iconEmail" onClick={sendEmail} />
        <a href="https://api.whatsapp.com/send?phone=972543113297" target="_blank" rel="noreferrer">
          {/* Replace 'YourPhoneNumberHere' with the actual phone number in international format (e.g., +1234567890) */}
           <FaWhatsapp className="iconInstagram" />
        </a>
        <a href="https://www.instagram.com/shhadyse/" target="_blank" rel="noreferrer">
          <FaInstagram className="iconInstagram" />
        </a>
        <a href="https://www.facebook.com/shhady.serhan/" target="_blank" rel="noreferrer">
          <FaFacebook className="iconFacebook" />
        </a>
        <a href="https://www.linkedin.com/in/shhady-serhan-a11403124" target="_blank" rel="noreferrer">
          <FaLinkedin className="iconFacebook" />
        </a>
        
      </div>
      <details  style={{border: "1px solid white", color:"white"}}>
    <summary  style={{fontWeight:"bold", fontSize:"18px", cursor:"pointer", color:"white", marginBottom:"20px", padding:"20px 20px 0px 40px",}}>
      About
    </summary>
    <div className="about">
    a dynamic professional with a unique blend of experience in both finance and technology. My background as an account manager at eToro, combined with my skills as a full-stack developer in HTML, CSS, React, Node.js, Express, and MongoDB, make me a valuable asset to any organization.

With a proven track record in the financial services industry, I have honed my skills in risk management, customer service, and business development. My strong background in business strategy and investments, as well as my experience in sales, allows me to approach problems with a creative and innovative mindset.

Passionate about the power of technology to drive change, I stay up-to-date with the latest advancements in the industry. I am dedicated to bringing my best to every project, with a focus on excellence and a drive to make a positive impact. Whether working on financial or tech-related initiatives, I am confident in my ability to bring value and make a difference in any team.
</div>
</details>
<details  style={{border: "1px solid white", color:"white"}}>
    <summary  style={{fontWeight:"bold", fontSize:"18px", cursor:"pointer", color:"white", marginBottom:"20px", padding:"20px 20px 0px 40px",}}>
      Projects
    </summary>
      <div className="projects">
        <div>
        <a href="https://funan.org/" target="_blank" rel="noreferrer">
        <div className="logoOfProject1"></div>
        </a>
        </div>
        <div>
        <a href="https://main--shiny-stroopwafel-a155e4.netlify.app/" target="_blank" rel="noreferrer">
          <div className="logoOfProject"></div>
        </a>
        </div>
      </div>
</details>
    </div>
  );
}

export default App;
