import React from 'react'
import { Form, Button } from 'semantic-ui-react';

function RegisterUI() {

    return (
        <Form>
            <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder="Last Name" />
            </Form.Field>
            <Button type="submit">Login</Button>
            <Button type="submit">Sign Up</Button>

        </Form>
    );
}
export default RegisterUI;