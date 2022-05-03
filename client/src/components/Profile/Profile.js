import React, { useEffect, useState } from 'react';
import ProfileView from './ProfileView';
import createRequest from '../../request';
import { Button } from 'react-bootstrap';
import './Profile.css'

const Profile = (props) => {
    const [state, setState] = useState( {
        users: []
    });

    useEffect( () => {
        const fetchUser = () => {
            createRequest("/profile.json").then((response) => {
                console.log(response)
                setState({users: response});
            });
        };
        fetchUser();
    }, []);

    return (
            <div>
                <ProfileView view={ state } />
                <Button className="offset-md-4" variant="secondary" href="/profile/edit">Edit Profile</Button> 
                <span className='changepassword'>
                    <Button className='btn-changepassword' variant="secondary" href="/profile/changepassword">Change Password</Button> 
                </span>
<<<<<<< HEAD
=======
                
>>>>>>> c703e7d88e30d68c4b1cad481e02ee038ed6e2cf
            </div>
    )
}

export default Profile;
