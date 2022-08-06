import React from 'react'
import { Form, Button, Segment, Grid } from 'semantic-ui-react';

import Header from './header';

function Login() {

    return (
        <div>
            <Header></Header>
            <Grid>
                <Segment className="ui two column centered grid" style={{ width: 550, marginTop: 20 }} >
                    <Form className="column" >
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