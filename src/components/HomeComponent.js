import { Card, CardImg, CardBody } from 'reactstrap';
import React from 'react';
import {
    Breadcrumb, BreadcrumbItem, Form, Row, Input, Col, Button,
    Modal, ModalBody, ModalHeader, FormGroup, Label, FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";
import { DEPARTMENTS } from './Staffs';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: this.props.staffs,
            isOpen: false,
            name: "",
            dOB: "",
            startDate: "",
            departments: "",
            salaryScale: "",
            annualLeave: "",
            overTime: "",
            submit: {
                name: false,
                dOB: false,
                startDate: false
            },
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
        this.setState({
            submit: { ...this.state.submit, dOB: true, name: true, startDate: true }
        });
        const errors = this.validate(this.state.name, this.state.startDate, this.state.dOB)
        if (errors.flag === true) {
            return;
        } else {
            console.log(this.state.dOB)
            this.toggle()
            const department = DEPARTMENTS.find(department => department.id === this.state.departments)
            const newStaff = {
                id: this.props.staffs.length,
                name: this.state.name,
                dOB: this.state.dOB,
                startDate: this.state.startDate,
                department: department,
                salaryScale: this.state.salaryScale,
                annualLeave: this.state.annualLeave,
                overTime: this.state.overTime,
            }
            const newStaffs = [...this.props.staffs, ...[newStaff]];
            this.setState({
                staffs: newStaffs
            })

            this.props.onSubmit(newStaffs)
        }
    }

    // control form for modal
    handleInputChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value,
            submit: { ...this.state.submit, [name]: true }
        })
    }
    // validate for modal
    validate(name, dOB, startDate) {
        const errors = {
            name: '',
            dOB: '',
            startDate: '',
            flag: false
        };
        if (name === '' || dOB === '' || startDate === '') {
            errors.flag = true;
        }
        if (this.state.submit.name && name === '') {
            errors.name = "Yêu cầu nhập"
        } else
            if (this.state.submit.name && name.length < 3) {
                errors.name = 'Yêu cầu nhập tối thiểu 3 ký tự';

            }
        if (this.state.submit.name && name.length > 30) {
            errors.name = 'Yêu cầu nhập tối đa 30 ký tự';
        }

        if (this.state.submit.dOB && dOB === "") {
            errors.dOB = 'Yêu cầu nhập';
        }
        if (this.state.submit.startDate && startDate === "") {
            errors.startDate = 'Yêu cầu nhập';
        }

        return errors;
    }

    render() {
        const errors = this.validate(this.state.name, this.state.dOB, this.state.startDate)
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
                                        <Label htmlFor="dOB" sm={3}>Ngày sinh</Label>
                                        <Col sm={9}>
                                            <Input
                                                type="date" id="dOB" name="dOB"
                                                value={this.state.dOB}
                                                onChange={this.handleInputChange}
                                                valid={errors.dOB === ""}
                                                invalid={errors.dOB !== ""}
                                            />
                                            <FormFeedback>{errors.dOB}</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlFor="startDate" sm={3}>Ngày vào công ty</Label>
                                        <Col sm={9}>
                                            <Input type="date" id="startDate" name="startDate"
                                                value={this.state.startDate}
                                                onChange={this.handleInputChange}
                                                valid={errors.startDate === ""}
                                                invalid={errors.startDate !== ""}
                                            />
                                            <FormFeedback>{errors.startDate}</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlFor="departments" sm={3}>Phòng Ban</Label>
                                        <Col sm={9}>
                                            <Input type="select" id="department" name="departments"
                                                onChange={this.handleInputChange}>
                                                <option value="Dept01" >Sale</option>
                                                <option value="Dept02" >HR</option>
                                                <option value="Dept03" >Marketing</option>
                                                <option value="Dept04">It</option>
                                                <option value="Dept05">Finance</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlFor="salaryScale" sm={3}>Hệ Số Lương</Label>
                                        <Col sm={9}>
                                            <Input type="number" id="salaryScale" name="salaryScale"
                                                onChange={this.handleInputChange} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlFor="annualLeave" sm={3}>Số ngày nghỉ còn lại</Label>
                                        <Col sm={9}>
                                            <Input id="annualLeave" type="number" name="annualLeave"
                                                onChange={this.handleInputChange} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mt-3" row>
                                        <Label htmlFor="overTime" sm={3}>Số ngày đi làm thêm</Label>
                                        <Col sm={9}>
                                            <Input type="number" id="overTime" name="overTime"
                                                onChange={this.handleInputChange} />
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