import React from 'react';
import { useParams } from 'react-router-dom';
import useUser from '../hooks/useUser';
import UserHero from '../components/users/UserHero';
import UserBio from '../components/users/UserBio';
import { ClipLoader } from 'react-spinners';
import { useEffect } from 'react';
import PostFeed from '../components/posts/PostFeed';

const UserView = () => {
  const { userId } = useParams();
  const { data: fetchedUser, isLoading } = useUser(userId);
  // console.log("in user view",userId);

  
  console.log(userId);
  console.log(fetchedUser);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }

  return (
      <>
        <UserHero userId={userId} />
        <UserBio userId={userId} />
        <PostFeed userId={userId} />
      </>
  );
};

export default UserView;