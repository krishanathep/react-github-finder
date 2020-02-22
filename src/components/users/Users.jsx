import React, { Component } from 'react'
import { Card, Row, Col, Image, Button } from 'react-bootstrap'

export class Users extends Component {
    render() {
        return (
            <div>
                <Row>
                    {this.props.users.map(user => (
                        <Col md={3}>
                            <Card align="center">
                                <Card.Body key={user.id} user={user}>
                                    <Image roundedCircle src={user.avatar_url} width="100px"  />
                                    <Card.Title>{user.login}</Card.Title>
                                    <Card.Text>
                                        <Button block variant="info" href={user.html_url}>Read More</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    </Row>   
            </div>
        )
    }
}

export default Users
