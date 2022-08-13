
// this is mostly copied from wk21act26

import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

import RequestForm from '../components/RequestForm/index';

import Auth from '../utils/auth';

import { } from 'semantic-ui-react';

const Profile = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });

    const user = data?.me || data?.user || {};
    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/me" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </h4>
        );
    }

    return (
        <div className="centered">
            <div className="">
                <h2 className="">
                    Viewing {userParam ? `${user.username}'s` : 'your'} profile.
                </h2>
                
            <div className="">
                <p>
                    {userParam ? `${user.skills}` : 'your'}
                </p>
            </div>

            <div className="">
                <p>
                    User Description
                </p>
                <br />
                <p>
                {userParam ? `${user.description}` : 'your'}
                </p>
            </div>

            <div className="">
                <p>
                {userParam ? `${user.email}` : 'your'}
                </p>
            </div>

                {!userParam && (
                    <div
                        className=""
                        style={{ border: '1px dotted #1a1a1a' }}
                    >
                        <RequestForm />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
