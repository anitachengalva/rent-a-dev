import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_LOGIN } from '../utils/mutations';
import { Form, Button, Segment, Grid } from 'semantic-ui-react';

import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(ADD_LOGIN);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("clicked")
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <div>
            <Grid>
                <Segment className="ui two column centered grid" style={{ width: 550, marginTop: 50 }}>
                    <h2>Log In Here</h2>
                    {data ? (
                        <p>
                            Success! You may now head{' '}
                            <Link to="/">back to the homepage.</Link>
                        </p>
                    ) : (

                        <Form onSubmit={handleFormSubmit}>
                            <Form.Field>
                                <Form.Input
                                    value={formState.email || ""}
                                    onChange={handleChange}
                                    name="email"
                                    label="email" />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    value={formState.password || ""}
                                    onChange={handleChange}
                                    name="password"
                                    label="password" />
                            </Form.Field>
                            <Button type="submit">Log In</Button>
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

export default Login;

