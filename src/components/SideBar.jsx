import PropTypes from 'prop-types';
import './SideBar.css';

const SideBar = ({ handleToggleModal, data }) => {
  const { title, date, explanation } = data;

  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2 className="sidebarTitle">{title}</h2>
        <div className="sidebarDescriptionContainer">
          <p className="descriptionTitle">{date}</p>
          <p>{explanation}</p>
        </div>
        <button className="sidebarButton" onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
  }).isRequired,
};

export default SideBar;