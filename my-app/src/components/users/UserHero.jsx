import React from 'react';
import useUser from '../../hooks/useUser';
import Avatar from '../Avatar';

const UserHero = ({ userId }) => {
  const { data: fetchedUser } = useUser(userId);

  return (
    <div>
      <div className="bg-neutral-700 h-44 relative">
        {fetchedUser?.coverImage && (
          <img
            src={fetchedUser.coverImage}
            alt="Cover Image"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar userId={userId} isLarge hasBorder />
        </div>
      </div>
    </div>
  );
};

export default UserHero;