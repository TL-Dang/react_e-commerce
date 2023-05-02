import { useNavigate } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({ category: { imageUrl, title, route } }) => {
  const navigate = useNavigate();
  const onNavigateHandler = function () {
    navigate(route);
  };

  return (
    <div className='directory-item-container' onClick={onNavigateHandler}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='directory-item-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
