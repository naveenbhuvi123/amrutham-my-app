import { GoPlus } from "react-icons/go"; // Importing the GoPlus icon from react-icons/go
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"; // Importing the social media icons from react-icons/fa
import { BsTwitter } from "react-icons/bs"; // Importing the Twitter icon from react-icons/bs
import "./index.css"; // Importing the CSS file for styling

// AboutSection component
const AboutSection = (props) => {
  return (
    <>
      {/* Container for the about section */}
      <div className="about-container">
        <div className="top-section">
          {/* Heading for the about section */}
          <h1 className="heading">A Little About Me</h1>
          {/* Follow button */}
          <button className="follow-button">
            Follow <GoPlus className="follow-icon" />
          </button>
        </div>
        {/* Description about the person */}
        <p className="description">
          Hello, I am Dr. Bruce Willis, a Gynecologist at Sanjivni Hospital
          Surat. I love to work with all my hospital staff and senior doctors.
          Completed my graduation in Gynecologist Medicine from the...
        </p>
        {/* Read more section */}
        <div className="read-more">
          <hr className="line" />
          <p className="read">Read More</p>
        </div>
        {/* Languages spoken section */}
        <div className="languages">
          <p className="lang lang-1">Language Spoken </p>
          <p className="lang">English</p>
          <p className="lang">Hindi</p>
          <p className="lang">Telugu</p>
        </div>
        {/* Social media icons */}
        <div className="socialMedia">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaYoutube className="icon" />
          <BsTwitter className="icon" />
        </div>
      </div>

      {/* Specialization section */}
      <div className="about-container specialization_1">
        <div className="top-section">
          <h1 className="heading">I Specialized In</h1>
        </div>
        <div className="description ">
          <div className="logo-icon">
            <div className="languages">
              {/* Specializations */}
              <p className="lang">Women Health</p>
              <p className="lang">Skin Care</p>
              <p className="lang">Immunity</p>
              <p className="lang">Hair care</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
