// Import necessary dependencies and CSS
import { MdHomeWork } from "react-icons/md";
import "./index.css";

// Define the TreatmentSection component
const TreatmentSection = () => {
  return (
    <>
      {/* Section for displaying the treatments */}
      <div className="treatment-Section about-container">
        <div className="top-section">
          <h1 className="heading">The Concerns I Treat</h1>
        </div>
        <ul className="treatments">
          <li className="treatment-name">Skin Treatment</li>
          <li className="treatment-name">Pregnancy</li>
          <li className="treatment-name">Period Doubts</li>
          <li className="treatment-name">Endometriosis</li>
          <li className="treatment-name">Pelvic Pain</li>
          <li className="treatment-name">Ovarian Cysts</li>
          <li className="treatment-name">+ 5 More</li>
        </ul>
      </div>

      {/* Section for displaying work experience */}
      <div className="experience-Section about-container">
        <div className="top-section">
          <h1 className="heading">My Work Experience</h1>
        </div>
        {/* Information about total years of practice */}
        <p className="expo">I HAVE BEEN IN PRACTICE FOR: 7+ YEARS</p>
        <hr className="line-1" />
        {/* Individual work experience details */}
        <div className="expo-details">
          <MdHomeWork className="icon-1" />
          <div className="university">
            <p className="university-name">MID-TOWN MEDICAL CLINIC</p>
            <p className="position-held">Senior doctor</p>
          </div>
          <p className="duration">2016-PRESENT</p>
        </div>
        <div className="expo-details">
          <MdHomeWork className="icon-1" />
          <div className="university">
            <p className="university-name">MID-TOWN MEDICAL CLINIC</p>
            <p className="position-held">Senior doctor</p>
          </div>
          <p className="duration">2010-2015</p>
        </div>
      </div>
    </>
  );
};

// Export the TreatmentSection component
export default TreatmentSection;
