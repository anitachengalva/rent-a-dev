import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Segment, Grid } from 'semantic-ui-react';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignUp = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }

    };

    return (

        <div>
            <Grid>
                <Segment className="ui two column centered grid" style={{ width: 550, marginTop: 50 }}>
                    <h2>Sign Up Here</h2>
                    {data ? (
                        <p>
                            Success! You may now head{' '}
                            <Link to="/">back to the homepage.</Link>
                        </p>
                    ) : (

                        <Form onSubmit={handleFormSubmit}>
                            <Form.Field>
                                <Form.Input
                                    //i think Form might be a semanticui thing but maybe it needs ot be formState
                                    value={formState.firstName || ""}
                                    onChange={handleChange}
                                    name="firstName"
                                    label="First Name" />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    value={formState.lastName || ""}
                                    onChange={handleChange}
                                    name="lastName"
                                    label="Last Name" />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    value={formState.username || ""}
                                    onChange={handleChange}
                                    name="username"
                                    label="Username" />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    value={formState.email || ""}
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    label="Valid Email" />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    value={formState.password || ""}
                                    onChange={handleChange}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    label="Password" />
                            </Form.Field>
                            <Button type="submit">Sign Up</Button>
                        </Form>
                    )}
                    {error && (
                        <div className="my-3 p-3 bg-danger text-white">
                            {error.message}
                        </div>
                    )}
                </Segment>
            </Grid>
        </div >
    );
};

export default SignUp;
