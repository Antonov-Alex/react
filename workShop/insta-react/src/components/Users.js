import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
             <User src="https://aoclinics.com/wp-content/uploads/2016/03/lhr-men-fb.jpg"
                        alt="man" 
                        name="Scott"/>
            <div className="users__block">
                  <User src="https://aoclinics.com/wp-content/uploads/2016/03/lhr-men-fb.jpg"
                        alt="man" 
                        name="Vasya"
                        min/>
                  <User src="https://aoclinics.com/wp-content/uploads/2016/03/lhr-men-fb.jpg"
                        alt="man" 
                        name="Petya"
                        min/>
                  <User src="https://aoclinics.com/wp-content/uploads/2016/03/lhr-men-fb.jpg"
                        alt="man" 
                        name="Mukola"
                        min/>
                  <User src="https://aoclinics.com/wp-content/uploads/2016/03/lhr-men-fb.jpg"
                        alt="man" 
                        name="Anatoliy Perovuch"
                        min/>
            </div>
        </div>
    )
};
