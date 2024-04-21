import React from "react";
import { TbStarFilled } from "react-icons/tb"; // Importing the star icon from react-icons/tb
import { LuPill } from "react-icons/lu"; // Importing the pill icon from react-icons/lu
import { BiCommentDetail } from "react-icons/bi"; // Importing the comment icon from react-icons/bi
import { FaGraduationCap } from "react-icons/fa6"; // Importing the graduation cap icon from react-icons/fa6
import { PiCurrencyInrBold } from "react-icons/pi"; // Importing the currency icon from react-icons/pi
import "./index.css"; // Importing the CSS file for styling

// DoctorProfileCard component receives doctorDetails as props
const DoctorProfileCard = (props) => {
  // Destructuring doctorDetails object from props
  const {
    name,
    gender,
    experience,
    languageKnown,
    rating,
  } = props.doctorDetails;

  return (
    <li className="profile-card">
      {" "}
      {/* Wrapping the card in a list item */}
      <div className="profile-image">
        {/* Displaying the rating with the star icon */}
        <p className="rating">
          {rating} <TbStarFilled className="star" /> {/* Using the star icon */}
        </p>
      </div>
      <div className="profile-info">
        {/* Displaying the doctor's name */}
        <h1 className="profile-name">{name}</h1>

        <div className="details">
          {/* Displaying the doctor's gender with an icon */}
          <p className="text">
            <LuPill /> {gender}
          </p>
          {/* Displaying the doctor's experience with an icon */}
          <p className="text">
            <FaGraduationCap /> {experience}
          </p>
          {/* Displaying the languages known by the doctor with an icon */}
          <p className="text">
            <BiCommentDetail /> {languageKnown}
          </p>
        </div>

        {/* Displaying consultation options */}
        <div className="buttons-consult">
          {/* Button for video consultation with fee */}
          <button className="cunsultation-button">
            Video Consultation <br />
            <span className="type">
              <PiCurrencyInrBold />
              800
            </span>
          </button>
          {/* Button for chat consultation with fee */}
          <button className="cunsultation-button">
            Chat Consultation <br />{" "}
            <span className="type">
              <PiCurrencyInrBold />
              Free
            </span>
          </button>
        </div>

        {/* Displaying appointment buttons */}
        <div className="appoint-buttons">
          {/* Button to view the doctor's profile */}
          <button className="button-3">View Profile</button>
          {/* Button to book a consultation with the doctor */}
          <button className="button-2">Book Consultation</button>
        </div>
      </div>
    </li>
  );
};

export default DoctorProfileCard; // Exporting the DoctorProfileCard component
