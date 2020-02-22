import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap'

export const Search = ({ handleChange }) => (
               <Row>
                   <Col>
                        <Form className="mt-3">
                            <Form.Group>
                                <Form.Control 
                                className="search"
                                type="search" 
                                placeholder="Search..." 
                                onChange={handleChange}    
                            />
                            </Form.Group>
                        </Form>
                   </Col>
                </Row> 
)

export default Search
