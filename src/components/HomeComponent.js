import { Card, CardImg, CardBody } from 'reactstrap';
import React from 'react';
import {
    Breadcrumb, BreadcrumbItem, Form, Row, Input, Col, Button,
    Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Label
} from "reactstrap";
import { Link } from "react-router-dom";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: this.props.staffs,
            isOpen: false,
            search: "",
            name: "",
            doB: "",
            startDate: ""

        }
        this.toggle = this.toggle.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // modal box
    toggle() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    //search nhân viên
    handleSubmit(e) {
        const value = this.fullName.value
        this.filterValue(value)
        e.preventDefault()
    }
    filterValue(value) {
        this.setState({
            staffs: this.props.staffs.filter(staff => staff.name.toLowerCase().includes(value))
        })
    }




    render() {
        // duyệt qua mảng staffs render ra nhân viên
        const liststaff = this.state.staffs.map((staff, index) => {
            return (
                <div key={index} className="col-6 col-md-4 col-xl-2 mb-3">
                    <Link className="text-reset text-decoration-none" to={`/home/${staff.id}`}>
                        <Card className="text-center ">
                            <CardImg src="assets/images/alberto.png" />
                            <CardBody>
                                <h3 >{staff.name}</h3>
                            </CardBody>
                        </Card>
                    </Link >
                </div >

            )
        });

        return (
            <div className="container">
                <div className="row  mt-3">
                    <div className="col-md-3">
                        <Breadcrumb >
                            <BreadcrumbItem ><Link className="text-reset text-decoration-none" to="/home"><h3>Nhân Viên</h3></Link></BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-md-2">
                        <Modal isOpen={this.state.isOpen} toggle={this.toggle} >
                            <ModalHeader toggle={this.toggle}><h3>Thêm Nhân Viên</h3></ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlfor="name" sm={3}>Tên</Label>
                                        <Col sm={9}>
                                            <Input
                                                type="text" id="name" name="name"

                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlfor="dateOB" sm={3}>Ngày sinh</Label>
                                        <Col sm={9}>
                                            <Input
                                                type="date" id="dateOB" name="dateOB" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlfor="dateIn" sm={3}>Ngày vào công ty</Label>
                                        <Col sm={9}>
                                            <Input type="date" id="dateIn" name="dateIn" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlfor="depart" sm={3}>Phòng Ban</Label>
                                        <Col sm={9}>
                                            <Input type="select" id="depart" name="depart" >
                                                <option>Sale</option>
                                                <option>HR</option>
                                                <option>Marketing</option>
                                                <option>It</option>
                                                <option>Finance</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlfor="salary" sm={3}>Hệ Số Lương</Label>
                                        <Col sm={9}>
                                            <Input type="number" id="salary" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlfor="rest" sm={3}>Số ngày nghỉ còn lại</Label>
                                        <Col sm={9}>
                                            <Input id="rest" type="number" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlfor="overTime" sm={3}>Số ngày đi làm thêm</Label>
                                        <Col sm={9}>
                                            <Input type="number" id="overTime" />
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" >Thêm</Button>
                            </ModalFooter>
                        </Modal>
                        <Button onClick={this.toggle}><i className="fa fa-plus"></i></Button>
                    </div>
                    <div className="col-md-6">
                        <Form onSubmit={this.handleSubmit}>
                            <Row className="form-group" >
                                <Col md={10}>
                                    <Input type="text" name="name" id="name"
                                        innerRef={input => this.fullName = input}
                                    />
                                </Col>
                                <Col md={2} >
                                    <Button color="primary" type="submit" >Tìm</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
                <div className="row">
                    {liststaff}
                </div>
            </div>
        )

    }
}


export default Home;