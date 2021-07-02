import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const LetterPopup = ({ letter, setLetter }) => {
  if (!letter) {
    return null;
  }

  const { title, richText } = letter;

  const closePopup = () => setLetter(null);

  // Ref: BEM methodology: getbem.com
  return (
    <div className="letter-popup">
      <div className="letter-popup__backdrop" onClick={closePopup} />
      <div className="letter-popup__container">
        <div className="letter-popup__card">
          <FaTimes
            className="letter-popup__card-close-button"
            onClick={closePopup}
          />
          <div className="letter-popup__card-content">
            <div className="letter-popup__card-header">{title}</div>
            <div
              className="letter-popup__card-body"
              dangerouslySetInnerHTML={{ __html: richText.html }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

LetterPopup.propTypes = {
  letter: PropTypes.object.isRequired,
  setLetter: PropTypes.func.isRequired,
};

export default LetterPopup;
