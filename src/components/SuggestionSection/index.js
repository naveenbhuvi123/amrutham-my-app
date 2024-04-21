import { FaAngleDown } from "react-icons/fa"; // Importing the FaAngleDown icon from react-icons/fa
import "./index.css"; // Importing the index.css file for styling

const SuggestionSection = () => {
  return (
    <>
      {/* List of filters */}
      <ul className="filters-container">
        <li className="item">
          Expertise <FaAngleDown /> {/* Expertise filter with down arrow */}
        </li>
        <li className="item">
          Gender <FaAngleDown /> {/* Gender filter with down arrow */}
        </li>
        <li className="item">
          Fees <FaAngleDown /> {/* Fees filter with down arrow */}
        </li>
        <li className="item">
          Languages <FaAngleDown /> {/* Languages filter with down arrow */}
        </li>
        <li className="item filter-item">
          All filters <FaAngleDown /> {/* All filters with down arrow */}
        </li>
      </ul>
      <hr className="line" /> {/* Horizontal line */}
    </>
  );
};

export default SuggestionSection;
