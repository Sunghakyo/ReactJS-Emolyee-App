import { Card, CardImg, CardBody } from 'reactstrap';
import React from 'react';
import {
    Breadcrumb, BreadcrumbItem, Form, Row, Input, Col, Button,
    Modal, ModalBody, ModalHeader, FormGroup, Label, FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: this.props.staffs,
            isOpen: false,
            name: "",
            dOB: "",
            dateIn: "",
            depart: "",
            salary: "",
            rest: "",
            overTime: "",
            submit: {
                name: false,
                dOB: false,
                dateIn: false
            }
        }
        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
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
    //  lọc ra nhân viên ứng với tìm ksiếm
    filterValue(value) {
        this.setState({
            staffs: this.props.staffs.filter(staff => staff.name.toLowerCase().includes(value))
        })
    }

    // validate modalbox
    handleSubmitForm() {

        if (this.validate(this.state.name, this.state.dOB, this.state.dateIn)) {
            this.setState({
                submit: { ...this.state.submit, dOB: true, name: true, dateIn: true }
            })
            return
        }


        const newStaff = {
            id: this.props.staffs.length,
            name: this.state.name,
            dOB: this.state.dOB,
            dateIn: this.state.dateIn,
            depart: this.state.depart,
            salary: this.state.salary,
            rest: this.state.rest,
            overTime: this.state.overTime,
        }
        const newStaffs = [...this.props.staffs, ...[newStaff]];
        this.setState({
            staffs: newStaffs
        })
    }
    handleInputChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value,
            submit: { ...this.state.submit, [name]: true }
        })
    }

    validate(name, dOB, dateIn) {
        const errors = {
            name: '',
            dOB: '',
            dateIn: '',
        };

        if (this.state.submit.name && name === '') {
            errors.name = "Yêu cầu nhập"
        }
        if (this.state.submit.name && name.length < 3) {
            errors.name = 'Yêu cầu nhập tối thiểu 3 ký tự';
        }
        if (this.state.submit.name && name.length > 30) {
            errors.name = 'Yêu cầu nhập tối đa 30 ký tự';
        }

        if (this.state.submit.dOB && dOB === "") {
            errors.dOB = 'Yêu cầu nhập';
        }
        if (this.state.submit.dateIn && dateIn === "") {
            errors.dateIn = 'Yêu cầu nhập';
        }
        if (name == "" && dOB == "" && dateIn == "") {
            return false;
        }
        return errors;

    }

    render() {
        const errors = this.validate(this.state.name, this.state.dOB, this.state.dateIn)

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
                            <ModalHeader toggle={this.toggle}>Thêm Nhân Viên</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlFor="name" sm={3}>Tên</Label>
                                        <Col sm={9}>
                                            <Input
                                                type="text" id="name" name="name"
                                                value={this.state.name}
                                                onChange={this.handleInputChange}
                                                valid={errors.name === ""}
                                                invalid={errors.name !== ""}
                                            />
                                            <FormFeedback>{errors.name}</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlFor="dateOB" sm={3}>Ngày sinh</Label>
                                        <Col sm={9}>
                                            <Input
                                                type="date" id="dateOB" name="dOB"
                                                value={this.state.dOB}
                                                onChange={this.handleInputChange}
                                                valid={errors.dOB === ""}
                                                invalid={errors.dOB !== ""}
                                            />
                                            <FormFeedback>{errors.dOB}</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlFor="dateIn" sm={3}>Ngày vào công ty</Label>
                                        <Col sm={9}>
                                            <Input type="date" id="dateIn" name="dateIn"
                                                value={this.state.dateIn}
                                                onChange={this.handleInputChange}
                                                valid={errors.dateIn === ""}
                                                invalid={errors.dateIn !== ""}
                                            />
                                            <FormFeedback>{errors.dateIn}</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlFor="depart" sm={3}>Phòng Ban</Label>
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
                                        <Label htmlFor="salary" sm={3}>Hệ Số Lương</Label>
                                        <Col sm={9}>
                                            <Input type="number" id="salary" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlFor="rest" sm={3}>Số ngày nghỉ còn lại</Label>
                                        <Col sm={9}>
                                            <Input id="rest" type="number" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlFor="overTime" sm={3}>Số ngày đi làm thêm</Label>
                                        <Col sm={9}>
                                            <Input type="number" id="overTime" />
                                        </Col>
                                    </FormGroup>
                                    <Button onClick={this.handleSubmitForm} color="primary"> Thêm </Button>
                                </Form>
                            </ModalBody>
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
            </div >
        )

    }
}


export default Home;