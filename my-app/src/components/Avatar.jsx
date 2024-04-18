import { Link } from 'react-router-dom';


const Avatar = ({ userId, isLarge, hasBorder }) => {


  // console.log('in avatar', userId);

  return (
    <Link to={`/users/${userId}`}>
      <div
        className={`
          ${hasBorder ? 'border-4 border-black' : ''}
          ${isLarge ? 'h-32' : 'h-12'}
          ${isLarge ? 'w-32' : 'w-12'}
          rounded-full
          hover:opacity-90
          transition
          cursor-pointer
          relative
        `}
      > 
        <img
          src={'/images/placeholder.png'}
          alt="Avatar"
          style={{
            objectFit: 'cover',
            borderRadius: '100%',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </Link>
  );
};

export default Avatar;