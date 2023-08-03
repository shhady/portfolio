import "./App.css";
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaLinkedin ,FaWhatsapp} from 'react-icons/fa';
import {SiExpress, SiMongodb} from 'react-icons/si';
import {AiOutlineHtml5} from 'react-icons/ai';
import {IoLogoCss3} from 'react-icons/io';
import {FaReact, FaNodeJs} from 'react-icons/fa';


function App() {
  function sendEmail() {
    console.log('clicked');
    window.location.assign("mailto:shhadyse@gmail.com");
  }

  return (
    <div className="homePageContainer">
     <div className="contentDiv">
      <div className="backgroundImageContainer">
        <div className='aboveImage'></div>
          {/* Background image goes here */}
        </div>
        <div style={{height:'100%', padding:"20px 0px", display:'flex', flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
       <div> <div className="Name">Shhady Serhan</div>
        <h2 className="Job">Full Stack <br/> Web Developer</h2>
        </div>
        <div>
        <h3 className="tech">Technologies</h3>
        <h4 className="techs"> HTML | CSS | React | Node.js<br/> Express | MongoDB</h4>
        </div>
        </div>
      </div>
      <div className="icons">
        <AiOutlineHtml5 className="iconT"/>
        <IoLogoCss3 className="iconT"/>
        <FaReact className="iconT"/>
        <FaNodeJs className="iconT"/>
        <SiExpress className="iconT"/>
        <SiMongodb className="iconT"/>
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
      <div className="details">
      <details  style={{ color:"white"}}>
    <summary  style={{fontWeight:"bold", fontSize:"18px", cursor:"pointer", color:"white", marginBottom:"20px", padding:"10px 20px 0px 40px",}}>
      About
    </summary>
    <div className="about">
    I'm a highly skilled and passionate Web Developer based in Nazareth. With expertise in HTML, CSS, React, Node.js, Express, and MongoDB, I craft innovative and high-performing web solutions. <br/>

My journey as a Web Developer has been fueled by a profound belief in the transformative power of technology. Staying up-to-date with the latest advancements, I am committed to delivering cutting-edge web experiences that drive positive change.<br/>

Whether it's building responsive websites, dynamic web applications, or scalable backend systems, I approach each project with creativity and dedication to excellence. My goal is to make a lasting impact by leveraging the full potential of technology.<br/>

If you're looking for a driven Web Developer to bring your digital ideas to life and elevate your online presence, I'm here to help. Let's collaborate and take your projects to new heights. Together, we'll create something remarkable that leaves a lasting impression on your audience. Let's get started on our web development journey today!
</div>
</details>
<details  style={{ color:"white"}}>
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
    </div>
  );
}

export default App;
