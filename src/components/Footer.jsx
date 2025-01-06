import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ handleToggleModal, data }) => {
  const { title } = data;

  return (
    <footer className="footer">
      <div className="bgGradient"></div>
      <div className="footerData">
        <h1 className="footerTitle">APOD PROJECT</h1>
        <h2 className="footerSubtitle">{title}</h2>
      </div>
      <button className="footerButton" onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info footerButtonIcon"></i>
      </button>
    </footer>
  );
};

Footer.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Footer;