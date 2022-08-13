
// this is mostly copied from wk21act26

import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import ThoughtForm from '../components/ThoughtForm';
// import ThoughtList from '../components/ThoughtList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

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
        // naviagte to something different?
        return <Navigate to="/profile" />;
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
        <div>
            <div className="flex-row justify-center mb-3">
                <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
                    {/* Viewing {userParam ? `${user.username}'s` : 'your'} profile. */}
                </h2>

                <div className="col-12 col-md-10 mb-5">
                    {/* <ThoughtList
                        thoughts={user.thoughts}
                        title={`${user.username}'s thoughts...`}
                        showTitle={false}
                        showUsername={false}
                    /> */}
                {/* </div>
                {!userParam && (
                    <div
                        className="col-12 col-md-10 mb-3 p-3"
                        style={{ border: '1px dotted #1a1a1a' }}
                    >
                        <ThoughtForm /> */}
                    </div>
                {/* )} */}
            </div>
        </div>
    );
};

export default Profile;

// function About() {
    
//         <div>
//             <section class="about-area">
//                 <div class="container-fluid">
//                     <div class="row">
//                         <div class="col-lg-4 col-md-12" style={style.imageArea}>
//                             <div class="about-image">
//                                 <img
//                                     src={image}
//                                     style={style.imageStyle}
//                                     alt="About me"
//                                     class="img-fluid"
//                                 />
//                             </div>
//                         </div>
//                         <div class="col-lg-8 col-md-12 about-title">
//                             <h2 class="text-uppercase pt-5">
//                                 <span>Let me</span>
//                                 <span>introduce</span>
//                                 <span>myself</span>
//                             </h2>
//                             <div class="paragraph py-4 w-80">
//                                 <p class="para">
//                                     Hello! My name is Cameron Buss, thank you for showing interest in
//                                     my portfolio. I have been a web development student for about
//                                     six months now, and I am so excited to continue learning. I have extensively learned to create with HTML, JavaScript and CSS. My
//                                     work experience is limited, but I have a few projects I am
//                                     proud to show off. Some have been completed on my own, and others while participating in the Univeristy of Washington
//                                     coding bootcamp. While in the bootcamp, I have successfully worked in groups to complete large projects while learning complex techniques including, but not limited to, Node.js, Express.js, MongoDB.
//                                 </p>
//                                 <p class="para">
//                                     In the future I hope to expand my knowledge by working as a full stack developer at a well established company. I enjoy designing UX/UI to create a flawless user experience, as well as working on functionality in the back-end.
//                                 </p>
//                                 <div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }
