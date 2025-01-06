import PropTypes from 'prop-types';
import './Main.css';

const Main = ({ data }) => {
  const { media_type, url, hdurl, title } = data;

  return (
    <div className="imgContainer">
      {media_type === 'video' ? (
        <iframe
          src={`${url}?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
          title={title || 'video'}
          className="videoFrame"
          allow="autoplay"
          allowFullScreen
        />
      ) : (
        <img
          src={hdurl}
          alt={title || 'bg-img'}
          className="bgImage"
        />
      )}
    </div>
  );
};

Main.propTypes = {
  data: PropTypes.shape({
    media_type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    hdurl: PropTypes.string.isRequired,
    title: PropTypes.string,
  }).isRequired,
};

export default Main;