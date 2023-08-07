import "./App.css";
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaLinkedin ,FaWhatsapp} from 'react-icons/fa';
import {SiExpress, SiMongodb} from 'react-icons/si';
import {AiOutlineHtml5} from 'react-icons/ai';
import {IoLogoCss3} from 'react-icons/io';
import {FaReact, FaNodeJs} from 'react-icons/fa';
import Technologies from "./technologies/Technologies";
import Services from "./services/Services";

function App() {
  function sendEmail() {
    console.log('clicked');
    window.location.assign("mailto:shhadyse@gmail.com");
  }

  return (
    <div className="homePageContainer">
     <div className="contentDiv">
      
        <div className="Name">Shhady Serhan</div>
        <div className="backgroundImage">
        <div className='aboveImage'></div>
          {/* Background image goes here */}
        </div>
        <h2 className="Job">Full Stack <br/> Web Developer</h2>
        {/* <h3 className="tech">Technologies</h3> */}
        {/* <h4 className="techs"> HTML | CSS | React | Node.js<br/> Express | MongoDB</h4> */}
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
      <div className="detailsAnimation">
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
<details  style={{ color:"white",backgroundColor: 'rgb(20, 20, 20)'}}>
    <summary  style={{fontWeight:"bold", fontSize:"18px", cursor:"pointer", color:"white", padding:"20px 20px 20px 40px",}}>
    Work experience
    </summary>
      <div className="workExp">
      <div className="exp1">
              <h3>2022-Present</h3>
              <h3>Full Stack Development Teacher</h3>
              <p>Inspiring the next generation of web developers through engaging and comprehensive teaching. Designed and delivered curriculum covering both front-end and back-end technologies. Guided students in building practical projects, fostering critical thinking and hands-on skills.</p>
            </div>
            <div className="exp2">
              <h3>2021-Present</h3>
              <h3>Freelance Full Stack Developer</h3>
              <p>Delivering bespoke web solutions for clients worldwide. Developed responsive and user-centric websites and applications utilizing cutting-edge technologies. Collaborated closely with clients to understand their needs, implement solutions, and ensure seamless functionality.</p>
            </div>
            <div className="exp3">
            <h3>2015-2020</h3>
            <h3>Account Manager - eToro Ltd</h3>
            <p>Managed a $45M portfolio for over 300 investors, acting as their primary liaison with the company. Analyzed market trends across diverse assets, offering tailored strategies to align with each client's risk tolerance and financial goals.</p>
          </div>
      </div>
</details>
<details  style={{ color:"white"}}>
    <summary  style={{fontWeight:"bold", fontSize:"18px", cursor:"pointer", color:"white", marginBottom:"20px", padding:"20px 20px 0px 40px",}}>
      Services
    </summary>
      <Services />
</details>
<details  style={{ color:"white",backgroundColor: 'rgb(20, 20, 20)'}}>
    <summary  style={{fontWeight:"bold", fontSize:"18px", cursor:"pointer", color:"white", padding:"20px 20px 20px 40px",}}>
      Technologies
    </summary>
      <Technologies />
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
    </div>
  );
}

export default App;
