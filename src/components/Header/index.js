import "./index.css"; // Importing the CSS file for styling

const Header = () => {
  return (
    <nav className="Header-container">
      <div className="nav-items-container">
        <img
          src="https://s3-alpha-sig.figma.com/img/503f/f9c0/bff6fd7d5705b1c51f69ea8e8c5ac172?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FtvcqIh0Zk3rjG2~mAzdN6TBJMvkoe8RNA697ccuf6bjSHERbJH~zyeQlIh8frOPlHxN63G3cXnt6XIp2EvfkPLJN7WoAyMJMPX6Tsm7WdO2y~C6v85wN9Cv6qLiR2yWPiD-RXFAhYudm1PetPy0GPjCIbbCXUYjjE4L~7xiGBT79Qanj1GwUhKYwuEtNkPtfC5SMKh7iocOVRQa-ItwPwGZWN4x9f~05x1fFx-~YBrlG0AkIP90~CzRNqt31f3o5pFEynoQ1ORV~kgu1doeWEcIA8oqVxWfi4mamKQf1nI7x5kXhoBra4D-phaK1RNHkvdLqiQwQvsnAUkK4Ery-g__"
          className="website-logo"
          alt="website-logo"
        />
        <ul className="menu-container">
          <li>
            <button className="button" type="button">
              Home
            </button>
          </li>
          <li>
            <button className="button button-1" type="button">
              Find Doctors
            </button>
          </li>
          <li>
            <button className="button" type="button">
              About US
            </button>
          </li>
        </ul>
        <div className="button-container">
          <button className="signup-button">Login</button>
          <button className="login-button">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
