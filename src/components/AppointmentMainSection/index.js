import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import AboutSection from "../AboutSection"; // Importing the AboutSection component
import Header from "../Header"; // Importing the Header component
import { TiStarFullOutline } from "react-icons/ti"; // Importing the star icon from react-icons/ti
import TreatmentSection from "../TreatmentSection"; // Importing the TreatmentSection component
import ReviewsSection from "../ReviewsSection"; // Importing the ReviewsSection component
import "./index.css";

// Sample data for the appointment details
const appointmentList = [
  {
    id: "1",
    name: "Dr. Willis",
    avatar: "Image_url",
    specialization: "Gynecologist",
    ratings: 4.6,
    reviewsCount: 102,
    patientsCount: 850,
    experience: "7+ years",
    languages: ["English", "Hindi", "Telugu"],
    consultationFee: 899,
    availableSlots: {
      "2024-04-20": ["09:00 AM", "11:00 AM", "01:00 PM"],
      "2024-04-21": ["10:00 AM", "12:00 PM", "02:00 PM"],
    },
  },
];

// Define the AppointmentMainSection component
const AppointmentMainSection = () => {
  return (
    <>
      {/* Render the Header component */}
      <Header />
      {/* Main section for displaying the doctor's profile information */}
      <div className="Doctor-profile-Info">
        <div className="Doctor-profile">
          {/* Doctor's profile image */}
          <img
            src="https://s3-alpha-sig.figma.com/img/f22c/f4c0/74534b8f8298fd03b834e8d171bab784?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oen0QfknI4qf6qmgX~ar9NXcmnzj0PELT3IvqseAdUDwjvD1qj-UVTj5DuRj~MyVBNmLXIyG9Gr6nT~L1yJqL0i1RoF4JwzZd0WlL29KWZ5a9qoWPtXH6SozWWl3zvbEbUmDBBYDGJWT5iPaNe~2V6ywZXm-8KJLYPNs4iCiB0SCbQIjindq5VC-YTdI6ebQUGFbw2vgJzgoA089c0zw6f8JD4VP6TgXFvhYzsIZX4sEr--yK8NWifD9x7nEzJZ6j9eRst86yCm2sDEYEstr54YJyK4BM8Z0zOmbBjbZxhbawdooaScKN9PLcYNhqQppFFQGTck1JlCo5e7mR49JNg__"
            className="image"
            alt="profile"
          />
          {/* Doctor's profile information */}
          <div className="profile-info">
            <div className="profile">
              {/* Doctor's name and specialization */}
              <p className="name">
                {appointmentList[0].name}
                <RiVerifiedBadgeFill className="tick" />
              </p>
              <p className="specialization">
                {appointmentList[0].specialization} <br /> 4.5
                {/* Render star icons based on the ratings */}
                {Array.from(
                  { length: Math.floor(appointmentList[0].ratings) },
                  (_, index) => (
                    <TiStarFullOutline key={index} className="star" />
                  )
                )}
              </p>
            </div>
            {/* Number of followers */}
            <div className="profile">
              <p className="head">
                followers <br />
                <span className="num">{appointmentList[0].patientsCount}</span>
              </p>
            </div>
            {/* Number of following */}
            <div className="profile">
              <p className="head">
                following <br />
                <span className="num">18k</span>
              </p>
            </div>
            {/* Number of posts */}
            <div className="profile">
              <p className="head">
                Posts
                <br />
                <span className="num">250</span>
              </p>
            </div>
            {/* Button to book a consultation */}
            <div className="profile">
              <button className="button-2">Book Consultation</button>
            </div>
          </div>
        </div>
      </div>
      {/* Section for displaying the rest of the information */}
      <div className="bottom-section">
        {/* Render the AboutSection component */}
        <AboutSection sectionDetails={appointmentList} />
        {/* Render the TreatmentSection component */}
        <TreatmentSection />
        {/* Render the ReviewsSection component */}
        <ReviewsSection />
      </div>
    </>
  );
};

export default AppointmentMainSection;
