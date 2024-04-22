// Importing necessary modules and components
import React from "react";
import Header from "../Header";
import SearchDocterSection from "../SearchDocterSection";
import SuggestionSection from "../SuggestionSection";
import SearchedContent from "../SearchedContent";
import DoctorProfileCard from "../DoctorProfileCard";
import "./index.css"; // Importing CSS file for styling

// Defining the MainPageSection component
const MainPageSection = () => {
  // Define doctorList array inside the component
  const doctorList = [
    {
      id: "1",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRkxIUxyvW2RatMzBt~P6NZo1YRjHdFXOzZmnEF0Sfzp0JQrIokQJJBqtA~FMDouN0H2v4y42oqp--x1XueS4SOeBCZ4eAMq9-bU9fyhAmZ83lbN0nCzMasn5rqC40xuBIPcd8EoguUSlVNhqAx-27Lix9d4bbx4cf28MeD0zD~INTfEgcQNEn5ZeTyq-c8z0seXwA1rHimsyeUQDOr60~iUsmNLQxJS1zeH1LHnY5~5jZiFpYzAmapv6y5jhPERcbVkbQ3qXlsVpePFBDRoYgXUsvJXGXcbVTJsakGF-ZUuArOus6RBJXahlKmpyOmjm-htXMpmFTl1xHEXGLC1Ig__",
      name: "Dr. Prerna Narang",
      gender: "Male-Female Imferlity",
      experience: "7 years of Experience",
      languageKnown: "Speaks: English, Hindi, Marathi",
      rating: "4.5",
    },

    {
      id: 2,
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRkxIUxyvW2RatMzBt~P6NZo1YRjHdFXOzZmnEF0Sfzp0JQrIokQJJBqtA~FMDouN0H2v4y42oqp--x1XueS4SOeBCZ4eAMq9-bU9fyhAmZ83lbN0nCzMasn5rqC40xuBIPcd8EoguUSlVNhqAx-27Lix9d4bbx4cf28MeD0zD~INTfEgcQNEn5ZeTyq-c8z0seXwA1rHimsyeUQDOr60~iUsmNLQxJS1zeH1LHnY5~5jZiFpYzAmapv6y5jhPERcbVkbQ3qXlsVpePFBDRoYgXUsvJXGXcbVTJsakGF-ZUuArOus6RBJXahlKmpyOmjm-htXMpmFTl1xHEXGLC1Ig__",
      name: "Dr. Prerna Narang",
      gender: "Male-Female Imferlity",
      experience: "7 years of Experience",
      languageKnown: "Speaks : English,Hindi,Marathi",
      rating: "4.5",
    },
    {
      id: 3,
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRkxIUxyvW2RatMzBt~P6NZo1YRjHdFXOzZmnEF0Sfzp0JQrIokQJJBqtA~FMDouN0H2v4y42oqp--x1XueS4SOeBCZ4eAMq9-bU9fyhAmZ83lbN0nCzMasn5rqC40xuBIPcd8EoguUSlVNhqAx-27Lix9d4bbx4cf28MeD0zD~INTfEgcQNEn5ZeTyq-c8z0seXwA1rHimsyeUQDOr60~iUsmNLQxJS1zeH1LHnY5~5jZiFpYzAmapv6y5jhPERcbVkbQ3qXlsVpePFBDRoYgXUsvJXGXcbVTJsakGF-ZUuArOus6RBJXahlKmpyOmjm-htXMpmFTl1xHEXGLC1Ig__",
      name: "Dr. Prerna Narang",
      gender: "Male-Female Imferlity",
      experience: "7 years of Experience",
      languageKnown: "Speaks: English,Hindi,Marathi",
      rating: "4.5",
    },
  ];

  // Rendering the component
  return (
    <div className="Amrutam-app-container">
      <Header /> {/* Rendering the Header component */}
      <SearchDocterSection />{" "}
      {/* Rendering the SearchDoctorSection component */}
      <SuggestionSection /> {/* Rendering the SuggestionSection component */}
      <div className="profile-container">
        <SearchedContent /> {/* Rendering the SearchedContent component */}
        <ul className="doctor-profile-card-list">
          {/* Mapping over the doctorList array to render DoctorProfileCard components */}
          {doctorList.map((eachDoctor) => (
            <DoctorProfileCard key={eachDoctor.id} doctorDetails={eachDoctor} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainPageSection; // Exporting the MainPageSection component
