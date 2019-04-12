import React from "react";
import PropTypes from "prop-types";
// import CardItem from './CardItem';
import Map from "./Map";
import MapContainer from "./Map";
import "../css/Modal.css";
import "../css/palette.css";
import starImages from "./starImages";

const Modal = props => {
  const starSrc = handleStars(props.show ? props.details.details.stars : 0);
  const styleObject = auraColorChange(
    props.show ? props.details.details.attributes.aura : ""
  );
  // const array = auraSpace(props.show ? props.details.details.attributes.aura : '');

  function auraColorChange(auraString) {
    const auras = auraString.split(",");
    let colorString = "";
    for (let i = 0; i < auras.length; i++) {
      switch (auras[i]) {
        case "trendy":
          colorString = `${colorString}var(--trendy), `;
          break;
        case "romantic":
          colorString = `${colorString}var(--romantic), `;
          break;
        case "hipster":
          colorString = `${colorString}var(--hipster), `;
          break;
        case "casual":
          colorString = `${colorString}var(--casual), `;
          break;
        case "inspired":
          colorString = `${colorString}var(--inspired), `;
          break;
        case "intimate":
          colorString = `${colorString}var(--intimate), `;
          break;
        case "classy":
          colorString = `${colorString}var(--classy), `;
          break;
        case "touristy":
          colorString = `${colorString}var(--touristy), `;
          break;
        case "cheerful":
          colorString = `${colorString}var(--cheerful), `;
          break;
        default:
          colorString = `${colorString}var(--mint), `;
      }
    }
    colorString = colorString.substring(0, colorString.length - 2);

    if (auras.length < 2) {
      return { backgroundColor: colorString };
    }
    return { backgroundImage: `linear-gradient(to right, ${colorString})` };
  }

  return (
    <div>
      <div
        className="modal-backdrop"
        onClick={props.close}
        role="button"
        style={{
          // transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.show ? "0.5" : "0",
          position: props.show ? "fixed" : "absolute",
          zIndex: props.show ? "15" : "-5"
        }}
      />
      <div
        className="modal-wrapper"
        style={{
          transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        <div className="modal-header">
          <h3>{props.show ? props.details.details.name : ""}</h3>
          {/* {props.details.details.attributes.aura.map((aura, i) => (
            <span>
              <Pill key={i} aura={aura} />
            </span>
          ))} */}
          <h1 style={styleObject}>
            {props.show ? props.details.details.attributes.aura : ""}
          </h1>
          <button className="close-modal-btn" onClick={props.close}>
            ×
          </button>
        </div>
        <div className="businessMap">
          <MapContainer className="modalMap" details={props.details.details} />
        </div>
        <div className="businessDetails">
          <ul className="categories">
            {props.show
              ? props.details.details.categories.map(category => (
                  <li>{category.title}</li>
                ))
              : ""}
          </ul>
          <ul className="address">
            {props.show
              ? props.details.details.displayAddress.map(addr => (
                  <li>{addr}</li>
                ))
              : ""}
          </ul>
          <p className="info">
            {props.show ? props.details.details.attributes.priceRange : ""}
          </p>
          <img className="modalStar" src={starSrc} />
          <a
            className="yelpLink"
            href={props.show ? props.details.details.url : ""}
            target="_blank"
          >
            <img className="yelpPic" src="./assets/img/yelpButton.jpg" />
            Click for more details!
            {/* <p className="yelpCall">Click for more details!</p> */}
          </a>
        </div>
        <div className="modal-footer">
          <button id="trendybtn">Trendy</button>
          <button id="inspiredbtn">Inspired</button>
          <button id="romanticbtn">Romantic</button>
          <button id="cheerfulbtn">Cheerful</button>
          <button id="intimatebtn">Intimate</button>
          <button id="classybtn">Classy</button>
          <button id="hipsterbtn">Hipster</button>
          <button id="casualbtn">Casual</button>
          <button id="touristybtn">Touristy</button>
        </div>
      </div>
    </div>
  );
};

const handleStars = stars => {
  switch (stars) {
    case 0.5:
      return starImages[12].src;
    case 1:
      return starImages[13].src;
    case 1.5:
      return starImages[14].src;
    case 2:
      return starImages[15].src;
    case 2.5:
      return starImages[16].src;
    case 3:
      return starImages[17].src;
    case 3.5:
      return starImages[18].src;
    case 4:
      return starImages[19].src;
    case 4.5:
      return starImages[20].src;
    case 5:
      return starImages[21].src;
    default:
      return starImages[11].src;
  }
};

Modal.propTypes = {
  business: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    attributes: PropTypes.shape({
      aura: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Modal;
