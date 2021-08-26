import { Card, CardImg, CardBody } from 'reactstrap';
import React from 'react';
import {
    Breadcrumb, BreadcrumbItem, Form, Row, Input, Col, Button,
    Modal, ModalBody, ModalHeader, Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => val => !val || val.length <= len;
const minLength = (len) => val => !val || val.length >= len;



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: this.props.staffs,
            isOpen: false,
            name: "",
            dOB: "",
            startDate: "",
            department: "",
            salaryScale: "",
            annualLeave: "",
            overTime: "",
        }
        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmitForm() {
        const newStaff = {
            id: this.props.staffs.length,
            name: this.state.name,
            dOB: this.state.dOB,
            startDate: this.state.startDate,
            department: this.state.department,
            salaryScale: this.state.salaryScale,
            annualLeave: this.state.annualLeave,
            overTime: this.state.overTime,
        }
        const newStaffs = [...this.props.staffs, ...[newStaff]];
        this.setState({
            staffs: newStaffs
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
                            <ModalHeader toggle={this.toggle}>Thêm Nhân Viên</ModalHeader>
                            <ModalBody>
                                <LocalForm>
                                    <Row className="form-group">
                                        <Label htmlFor="name" md="2">Tên</Label>
                                        <Col md={10} >
                                            <Control.text model=".name" name="name"
                                                className="form-control"
                                                validators={{
                                                    required, maxLength: maxLength(30), minLength: minLength(3)
                                                }}
                                            />
                                            <Errors
                                                className='text-danger'
                                                model=".name"
                                                messages={{
                                                    required: "Yêu cầu nhập",
                                                    maxLength: "yêu cầu nhập tối đa 30 ký tự ",
                                                    minLength: "yêu cầu nhập tối thiểu 3 ký tự"
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label htmlFor="dOB" md="2">Ngày sinh</Label>
                                        <Col md={10} >
                                            <Control type="date" model=".dOB" name="dOB"
                                                className="form-control"
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className='text-danger'
                                                model=".dOB"
                                                messages={{
                                                    required: "Yêu cầu nhập"
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label htmlFor="startDate" md="2">Ngày vào công ty</Label>
                                        <Col md={10} >
                                            <Control type="date" model=".startDate" name="startDate"
                                                className="form-control"
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className='text-danger'
                                                model=".startDate"
                                                messages={{
                                                    required: "Yêu cầu nhập"
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label htmlFor="departments" md={2}>Phòng ban</Label>
                                        <Col md={10} >
                                            <Control.select model=".departments" name="department" className="form-control" >
                                                <option>Sale</option>
                                                <option>HR</option>
                                                <option>Marketing</option>
                                                <option>IT</option>
                                                <option>Finance</option>
                                            </Control.select >
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label htmlFor="salaryScale" md="2">Hệ số lương</Label>
                                        <Col md={10} >
                                            <Control type="number" model=".salaryScale" name="salaryScale"
                                                className="form-control"
                                            />

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label htmlFor="" md="2">Số ngày nghỉ </Label>
                                        <Col md={10} >
                                            <Control type="number" model=".salaryScale" name="salaryScale"
                                                className="form-control"
                                            />

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label htmlFor="overTime" md="2">Số ngày làm thêm</Label>
                                        <Col md={10} >
                                            <Control type="number" model=".overTime" name="overTime"
                                                className="form-control"
                                            />
                                        </Col>
                                    </Row>
                                    <Button onClick={this.handleSubmitForm} color="primary"> Thêm </Button>
                                </LocalForm>
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