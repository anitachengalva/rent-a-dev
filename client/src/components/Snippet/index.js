import React from 'react';

import { Card, Button } from 'semantic-ui-react';



const Snippet = () => {
    // const createCard = () => {
    //     let employee = []

    //     employee.map()
    // }
    // const extra = (
    //     <a>
    //         <p>Skills:{ } </p>
    //     </a>
    // )
    var style = {
        card: {
            // padding: "20px",
            // width: "800px",
        },
        header: {
            paddingTop: "20px",
            fontSize: "35px",
            fontWeight: "bold",
        },
        meta: {
            paddingTop: "20px",
            fontSize: "15px",
        },
        description: {
            fontSize: "15px",
            padding: "20px",
        },
        button: {
            display: "flex",
            justifyContent: "center",
            paddingLeft: "10px",
            paddingRight: "10px",

        }
    }

    return (
        <Card.Group itemsPerRow={3} centered >

            <Card style={style.card}>
                <Card.Header style={style.header}>Bobby Baker</Card.Header>
                <Card.Meta style={style.meta} >HTML CSS React JavaScript</Card.Meta>
                <Card.Description style={style.description}>
                    <p>Senior Web Developer for over 8 years, freelancing since 2018. Received a degree in computer science from University of Washington in 2012.</p>
                    <Button.Group>
                        <Button>view profile</Button>
                        <Button.Or />
                        <Button positive>send email</Button>
                    </Button.Group>
                </Card.Description>
            </Card>


            <Card style={style.card}>
                <Card.Header style={style.header}>Bobby Baker</Card.Header>
                <Card.Meta style={style.meta} >HTML CSS React JavaScript</Card.Meta>
                <Card.Description style={style.description}>
                    <p>Senior Web Developer for over 8 years, freelancing since 2018. Received a degree in computer science from University of Washington in 2012.</p>
                    <Button.Group>
                        <Button>view profile</Button>
                        <Button.Or />
                        <Button positive>send email</Button>
                    </Button.Group>
                </Card.Description>
            </Card>
            <Card style={style.card}>
                <Card.Header style={style.header}>Bobby Baker</Card.Header>
                <Card.Meta style={style.meta} >HTML CSS React JavaScript</Card.Meta>
                <Card.Description style={style.description}>
                    <p>Senior Web Developer for over 8 years, freelancing since 2018. Received a degree in computer science from University of Washington in 2012.</p>
                    <Button.Group>
                        <Button>view profile</Button>
                        <Button.Or />
                        <Button positive>send email</Button>
                    </Button.Group>
                </Card.Description>
            </Card>
            <Card style={style.card}>
                <Card.Header style={style.header}>Bobby Baker</Card.Header>
                <Card.Meta style={style.meta} >HTML CSS React JavaScript</Card.Meta>
                <Card.Description style={style.description}>
                    <p>Senior Web Developer for over 8 years, freelancing since 2018. Received a degree in computer science from University of Washington in 2012.</p>
                    <Button.Group>
                        <Button>view profile</Button>
                        <Button.Or />
                        <Button positive>send email</Button>
                    </Button.Group>
                </Card.Description>
            </Card>
            <Card style={style.card}>
                <Card.Header style={style.header}>Bobby Baker</Card.Header>
                <Card.Meta style={style.meta} >HTML CSS React JavaScript</Card.Meta>
                <Card.Description style={style.description}>
                    <p>Senior Web Developer for over 8 years, freelancing since 2018. Received a degree in computer science from University of Washington in 2012.</p>
                    <Button.Group>
                        <Button>view profile</Button>
                        <Button.Or />
                        <Button positive>send email</Button>
                    </Button.Group>
                </Card.Description>
            </Card>
            <Card style={style.card}>
                <Card.Header style={style.header}>Bobby Baker</Card.Header>
                <Card.Meta style={style.meta} >HTML CSS React JavaScript</Card.Meta>
                <Card.Description style={style.description}>
                    <p>Senior Web Developer for over 8 years, freelancing since 2018. Received a degree in computer science from University of Washington in 2012.</p>
                    <Button.Group>
                        <Button>view profile</Button>
                        <Button.Or />
                        <Button positive>send email</Button>
                    </Button.Group>
                </Card.Description>
            </Card>
            <Card style={style.card}>
                <Card.Header style={style.header}>Bobby Baker</Card.Header>
                <Card.Meta style={style.meta} >HTML CSS React JavaScript</Card.Meta>
                <Card.Description style={style.description}>
                    <p>Senior Web Developer for over 8 years, freelancing since 2018. Received a degree in computer science from University of Washington in 2012.</p>
                    <Button.Group>
                        <Button>view profile</Button>
                        <Button.Or />
                        <Button positive>send email</Button>
                    </Button.Group>
                </Card.Description>
            </Card>
        </Card.Group >
    )
}

export default Snippet