import React from 'react'
import { Form, Button, Segment, Grid } from 'semantic-ui-react';
import Homepage from './homepage';

function SignUp() {

    return (
        <div>
            <Header></Header>
            <Grid>
                <Grid.Column style={{ maxWidth: 550, marginTop: 20 }} >
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
                        <Button type="submit">Login</Button>
                        <Button type="submit">Sign Up</Button>
                    </Form>
                </Segment>
            </Grid>

        </div >

    );
}
export default SignUp;