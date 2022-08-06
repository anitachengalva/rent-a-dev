import React from 'react'
import { Form, Button, Segment, Grid } from 'semantic-ui-react';


function Login() {

    return (
        <div>
            <Grid>
                <Segment className="ui two column centered grid" style={{ width: 550, marginTop: 50 }} >
                    <h2>Login In Here</h2>
                    <Form className="column" >
                        <Form.Field>
                            <Form.Input placeholder="Username" label="Username" />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input placeholder="Password" label="Password" />
                        </Form.Field>
                        <Button fluid type="submit">Login</Button>
                        <p>Don't have an account?</p>
                        <Button fluid type="submit" href="/signup" >Sign Up</Button>
                    </Form>
                </Segment>
            </Grid>
        </div >

    );
}
export default Login;