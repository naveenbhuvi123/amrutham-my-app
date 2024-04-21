import React from "react";
import { RxCross2 } from "react-icons/rx";  // Importing the cross icon from react-icons/rx
import "./index.css";  // Importing the CSS file for styling

// SearchedContent component displays the searched content with cross icons
const SearchedContent = () => {
  return (
    <div className="searched-content-container">  {/* Container for the searched content */}
      <ul className="content-list">  {/* List to contain each searched item */}
        <li className="content">
          Health Care <RxCross2 />  {/* Displaying "Health Care" with a cross icon */}
        </li>
        <li className="content">
          Female <RxCross2 />  {/* Displaying "Female" with a cross icon */}
        </li>
        <li className="content">
          Rs.0-Rs.500 <RxCross2 />  {/* Displaying the price range with a cross icon */}
        </li>
        <li className="content">
          Hindi <RxCross2 />  {/* Displaying the language with a cross icon */}
        </li>
      </ul>
    </div>
  );
};

export default SearchedContent;  // Exporting the SearchedContent component
