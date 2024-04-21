import { IoLocationSharp } from "react-icons/io5"; // Importing IoLocationSharp icon from react-icons/io5
import { IoIosArrowDropdown } from "react-icons/io"; // Importing IoIosArrowDropdown icon from react-icons/io
import { FaArrowRightLong } from "react-icons/fa6"; // Importing FaArrowRightLong icon from react-icons/fa6
import "./index.css"; // Importing the index.css file for styling

const SearchDocterSection = () => {
  return (
    <div className="Search-doctors-section">
      {/* Search heading */}
      <h1 className="search-heading">
        Find Export Doctors For An In-Clinic Session Here
      </h1>
      {/* Search bars container */}
      <div className="search-bars-container">
        {/* Location container */}
        <div className="location-container">
          <IoLocationSharp /> {/* Location icon */}
          {/* Location input field */}
          <input
            type="search"
            placeholder="Select Location"
            className="input"
          />
          <IoIosArrowDropdown /> {/* Dropdown arrow icon */}
        </div>
        {/* Search container for doctor, specialization, clinic name */}
        <div className="search-container">
          {/* Search input field */}
          <input
            type="search"
            className="input"
            placeholder="eg. Doctor, specialisation, clinic name"
          />
          <FaArrowRightLong /> {/* Right arrow icon */}
        </div>
      </div>
    </div>
  );
};

export default SearchDocterSection;
