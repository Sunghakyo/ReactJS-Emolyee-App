import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label, Input } from 'reactstrap'
import { Control, Errors, LocalForm } from 'react-redux-form'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;


class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false,
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(value) {
        alert(`Current State is: ${JSON.stringify(value)}`)
    }


    render() {
        return (
            <div>
                <Button color="secondary" onClick={this.toggle}><i className="fa fa-pencil"></i>Submit Comment </Button>
                <Modal isOpen={this.state.isModalOpen} >
                    <ModalHeader onClick={this.toggle}><h3>Submit Comment</h3></ModalHeader>
                    <ModalBody>
                        <LocalForm onsubmit={(value) => this.handleSubmit(value)}>
                            <Row className="form-group">
                                <Label className="mt-3" htmlFor="select">Rating</Label>
                                <Col md={10} >
                                    <Input className="mt-3" type="select" name="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label className="mt-3" htmlFor="comment">Comment</Label>
                                <Col md={10}>
                                    <Input className="mt-3" type="textarea" name="comment" />
                                </Col>

                            </Row>
                            <Button onClick={this.toggle} color="primary" className="mt-3 mb-3">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>

        )

    }
}

export default CommentForm;