import React from 'react';
import PropTypes from 'prop-types';
import AuraPills from './AuraPills';
import '../css/ResultCard.css';
import starImages from './starImages';

export default class CardItem extends React.Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {};
  }

  auraColorChange = auraString => {
    const auras = auraString.split(',');
    // console.log(auras);
    let colorString = '';
    for (let i = 0; i < auras.length; i++) {
      switch (auras[i]) {
        case 'trendy':
          colorString = `${colorString}var(--trendy), `;
          break;
        case 'romantic':
          colorString = `${colorString}var(--romantic), `;
          break;
        case 'hipster':
          colorString = `${colorString}var(--hipster), `;
          break;
        case 'casual':
          colorString = `${colorString}var(--casual), `;
          break;
        case 'inspired':
          colorString = `${colorString}var(--inspired), `;
          break;
        case 'intimate':
          colorString = `${colorString}var(--intimate), `;
          break;
        case 'classy':
          colorString = `${colorString}var(--classy), `;
          break;
        case 'touristy':
          colorString = `${colorString}var(--touristy), `;
          break;
        case 'cheerful':
          colorString = `${colorString}var(--cheerful), `;
          break;
        default:
          colorString = `${colorString}var(--mint), `;
      }
    }
    colorString = colorString.substring(0, colorString.length - 2);
  };

  auraSpace = auraString => {
    const auras = auraString.split(',');
  };

  handleStars = stars => {
    switch (stars) {
      case 0.5:
        return starImages[1].src;
      case 1:
        return starImages[2].src;
      case 1.5:
        return starImages[3].src;
      case 2:
        return starImages[4].src;
      case 2.5:
        return starImages[5].src;
      case 3:
        return starImages[6].src;
      case 3.5:
        return starImages[7].src;
      case 4:
        return starImages[8].src;
      case 4.5:
        return starImages[9].src;
      case 5:
        return starImages[10].src;

      default:
        return starImages[0].src;
    }
  };

  render() {
    // consts here
    const { business, onOpenModal } = this.props;

    const styleObject = this.auraColorChange(business.attributes.aura);
    return (
      <div key={business.id} className="resultCard" onClick={() => onOpenModal(business)}>
        <div className="resultCardImageContainer">
          {business.attributes.aura.split(',').map(auraSingleton => (
            <AuraPills aura={auraSingleton} />
          ))}

          <img
            className="resultCardImage"
            src={
              business.businessImage.src
                ? business.businessImage.src
                : 'http://mymodernmet.com/wp/wp-content/uploads/2017/10/azuki-camping-hedgehog-3.jpg'
            }
            alt={business.businessImage.owner ? business.businessImage.owner : 'No image owner provided'}
          />
        </div>

        <span className="resultCardTitle">{business.name}</span>
        <span className="resultCardSubtitle">{business.address}</span>
        <span className="resultCardSubtitle">
          {business.city}, {business.state} {business.postalCode}
        </span>
        {/* <span className="resultCardAura" style={styleObject}>
          {this.auraSpace(business.attributes.aura).map(aura => (
            <AuraPills aura={aura} />
          ))}
          {this.auraSpace(business.attributes.aura)}

        </span> */}
        <img className="resultCardStar" src={this.handleStars(business.stars)} alt="Rating Stars" />
      </div>
    );
  }

  // this.querySelector(".resultCard").onClick
}

CardItem.propTypes = {
  business: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    attributes: PropTypes.shape({
      aura: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
