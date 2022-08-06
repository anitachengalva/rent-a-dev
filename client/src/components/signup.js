import React from 'react'
import { Form, Button, Segment, Grid } from 'semantic-ui-react';

function SignUp() {

    return (
        <div>
            <Grid>
                <Segment className="ui two column centered grid" style={{ width: 550, marginTop: 50 }}>
                    <h2>Sign Up Here</h2>

                    <Form>
                        <Form.Field>
                            <Form.Input label="First Name" />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input label="Last Name" />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input label="Username" />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input placeholder="example@email.com" label="Valid Email" />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input placeholder="Password" label="Password" />
                        </Form.Field>
                        <Button type="submit">Sign Up</Button>
                    </Form>
                </Segment>
            </Grid>
        </div >

    );
}
export default SignUp;