import React from 'react'
import { Form, Button, Segment, Grid } from 'semantic-ui-react';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';

function Login() {

    return (
        <div>
            <Header></Header>
            <Grid>
                <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
                    Login Here
                </Grid.Column>
                <Segment>
                    <Form>
                        <Form.Field>
                            <Form.Input placeholder="Username" label="Username" />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input placeholder="Password" label="Password" />
                        </Form.Field>
                        <Button fluid type="submit">Login</Button>
                        <h2>Don't have an account? sign up here</h2>
                        <Button fluid type="submit">Sign Up</Button>
                    </Form>
                </Segment>
            </Grid>

        </div >

    );
}
export default Login;