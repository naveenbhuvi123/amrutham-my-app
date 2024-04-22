// Import necessary dependencies and CSS
import { LiaStarSolid } from "react-icons/lia";
import "./index.css";

// Define the ReviewsSection component
const ReviewsSection = () => {
  return (
    <div className="ReviewsSection about-container">
      {/* Section for displaying the top heading */}
      <div className="top-section">
        <h1 className="heading">Featured Reviews (102)</h1>
      </div>
      {/* Section for each review */}
      <div className="review-list">
        {/* Individual review details */}
        <div className="ReviewsSection expo-details">
          {/* Image of the reviewer */}
          <img
            src="https://s3-alpha-sig.figma.com/img/682e/889c/026a53f2577835188ce397e0a36f4bb8?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=db1OKZH7yaKHnH2N1edZdSNefyeCUi8YIj19kXFaJTpFCMiK0GJ-2a9Hj9PCA6pzlktF2uAlSYXUs8bG4heu-I-xkbi9D0yjnZDAtTp8RNk1YKNelPoJej7mvDOVkDwCBRrcksYPkyDKzg5IGitx9YnmJUbkeILMzxu2HZ7YtDzrOvrCqQBVaNs-lz4xXZ79uaCtHQhjZYQ7PO0dx1IqNxMIiFxlN3qwf78EDZvsFydhrMkWU0mdcl6evnyOQI8gcifXAtyBqk7eoX2EeEVksSlU8~PuD8OG85T1htPnTJ0mkVNOquNnvFhuWZh6j3Hx4P2F959UiI-glLT5vq0BWw__"
            className="review-image"
            alt="review"
          />
          {/* Details of the reviewer */}
          <div className="university">
            <p className="patient university-name">Alicent Hightower</p>
            <p className="treat-done position-held">Consulted for Skin care</p>
          </div>
          {/* Duration of the consultation */}
          <p className="duration">2010-2015</p>
        </div>
        {/* Rating stars for the review */}
        <div className="rating-stars">
          <LiaStarSolid className="stars" />
          <LiaStarSolid className="stars" />
          <LiaStarSolid className="stars" />
          <LiaStarSolid className="stars" />
        </div>
        {/* Review text */}
        <p className="review">
          Might be bit early to confirm but yes I can see noticeable difference
          in my hairfall. will write again after using it for longer periods
        </p>
      </div>
      {/* Horizontal line separator */}
      <hr className="line-1" />
      {/* Second review */}
      <div className="review-list">
        <div className="ReviewsSection expo-details">
          <img
            src="https://s3-alpha-sig.figma.com/img/682e/889c/026a53f2577835188ce397e0a36f4bb8?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=db1OKZH7yaKHnH2N1edZdSNefyeCUi8YIj19kXFaJTpFCMiK0GJ-2a9Hj9PCA6pzlktF2uAlSYXUs8bG4heu-I-xkbi9D0yjnZDAtTp8RNk1YKNelPoJej7mvDOVkDwCBRrcksYPkyDKzg5IGitx9YnmJUbkeILMzxu2HZ7YtDzrOvrCqQBVaNs-lz4xXZ79uaCtHQhjZYQ7PO0dx1IqNxMIiFxlN3qwf78EDZvsFydhrMkWU0mdcl6evnyOQI8gcifXAtyBqk7eoX2EeEVksSlU8~PuD8OG85T1htPnTJ0mkVNOquNnvFhuWZh6j3Hx4P2F959UiI-glLT5vq0BWw__"
            className="review-image"
            alt="review"
          />
          <div className="university">
            <p className="patient university-name">Alicent Hightower</p>
            <p className="treat-done position-held">Consulted for Skin care</p>
          </div>
          <p className="duration">2010-2015</p>
        </div>
        <div className="rating-stars">
          <LiaStarSolid className="stars" />
          <LiaStarSolid className="stars" />
          <LiaStarSolid className="stars" />
          <LiaStarSolid className="stars" />
        </div>
        <p className="review">
          Might be bit early to confirm but yes I can see noticeable difference
          in my hairfall. will write again after using it for longer periods
        </p>
      </div>
      {/* Horizontal line separator */}
      <hr className="line-1" />
      {/* Empty review list */}
      <div className="review-list"></div>
    </div>
  );
};

export default ReviewsSection;
