import React from 'react';
import './ProfileSide.css'
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';
import FollowersCard from '../FollowersCard/FollowersCard';

const ProfileSide = () => {
    return (
        <div className='ProfileSide'>
            <LogoSearch></LogoSearch>
            <ProfileCard></ProfileCard>
            <FollowersCard></FollowersCard>
        </div>
    );
};

export default ProfileSide;