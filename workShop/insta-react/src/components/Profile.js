import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
           <User 
                 src="https://aoclinics.com/wp-content/uploads/2016/03/lhr-men-fb.jpg"
                 alt="man" 
                 name="Scot"
                            />
           <Palette/>
        </div>
    )
}

export default Profile;