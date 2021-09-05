import { Card, CardImg, CardBody } from 'reactstrap';
import React, { Component } from 'react';
import {
    Breadcrumb, BreadcrumbItem, Row, Col, Button,
    Modal, ModalBody, ModalHeader, Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from '../common/LoadingComponent';
import { Fade, Stagger, FadeTransform } from 'react-animation-components';
import { postStaff, fetchStaffs } from '../../redux/ActionCreator';
import { connect } from 'react-redux';
import dateformat from 'dateformat';

const required = (val) => val && val.length;
const maxLength = (len) => val => !val || val.length <= len;
const minLength = (len) => val => !val || val.length >= len;
const isEvenNum = val => !val || val % 1 === 0;

//render card staffs
const ListOfStaffs = ({ staffs, staffsLoading, staffsFailed }) => {
    if (staffsLoading) {
        return (
            <Loading />
        )
    }
    else if (staffsFailed) {
        return (
            <div className="col-12">
                <h5>{staffsFailed}</h5>
            </div>
        )
    }
    else {
        return staffs.map((staff, index) => {
            return (
                <div key={index} className="col-6 col-md-4 col-xl-2 mb-3">
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Stagger in>
                            <Fade in>
                                <Link className="text-reset text-decoration-none" to={`/home/staffs/${staff.id}`}>
                                    <Card className="text-center ">
                                        <CardImg src="/assets/images/alberto.png" />
                                        <CardBody>
                                            <h3 >{staff.name}</h3>
                                        </CardBody>
                                    </Card>
                                </Link >
                            </Fade>
                        </Stagger>
                    </FadeTransform>

                </div>)
        })
    }
}


class ListStaffs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: this.props.staffs,
            isOpen: false,
            filter: this.props.staffs,
            name: undefined,
            dob: undefined,
            startDate: undefined,
            salary: '',
            annual: '',
            overTime: '',

        }
        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFind = this.handleFind.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    // modal box
    toggle() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    onChangeInput = (e) => {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    //search nhân viên
    handleFind(values) {
        this.setState({
            staffs: this.state.filter.filter(staff => staff.name.toLowerCase().includes(values.nameStaff)),
        })

    }

    // Post Staff
    handleSubmit(value) {

        this.toggle()
        const staffPosted = {
            name: value.name,
            doB: dateformat(value.doB, "dd/mm/yyyy"),
            departmentId: value.departments,
            salaryScale: +value.salaryScale,
            startDate: dateformat(value.startDate, "dd/mm/yyyy"),
            annualLeave: +value.annualLeave,
            overTime: +value.overTime
        }
        this.props.postStaff(staffPosted);
        this.props.fetchStaffs();
    }


    render() {
        return (
            <div className="container">
                <div className="row  mt-3">
                    <div className="col-md-3">
                        <Breadcrumb >
                            <BreadcrumbItem ><Link className="text-reset text-decoration-none" to="/home">Trang Chủ</Link></BreadcrumbItem>
                            <BreadcrumbItem ><Link className="text-reset text-decoration-none" to="/home/staffs">Nhân Viên</Link></BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-md-2">
                        <Modal isOpen={this.state.isOpen} toggle={this.toggle} >
                            <ModalHeader toggle={this.toggle}>Thêm Nhân Viên</ModalHeader>
                            <ModalBody >
                                <LocalForm onSubmit={values => this.handleSubmit(values)} initialState={{}} >
                                    <Row className="mb-3">
                                        <Label htmlFor="name" md="2">Tên</Label>
                                        <Col md={10} >
                                            <Control.text model=".name" name="name"
                                                className="form-control"
                                                validators={{
                                                    required, maxLength: maxLength(30), minLength: minLength(3)
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".name"
                                                messages={{
                                                    required: "Yêu cầu nhập",
                                                    maxLength: "yêu cầu nhập tối đa 30 ký tự ",
                                                    minLength: "yêu cầu nhập tối thiểu 3 ký tự"
                                                }}
                                                show="touched"
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="dOB" md="2">Ngày sinh</Label>
                                        <Col md={10} >
                                            <Control.text type="date" model=".dOB" name="dOB"
                                                className="form-control"
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".dOB"
                                                messages={{
                                                    required: "Yêu cầu nhập"
                                                }}
                                                show="touched"

                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="startDate" md="2">Ngày vào công ty</Label>
                                        <Col md={10} >
                                            <Control.text type="date" model=".startDate" name="startDate"
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
                                                show="touched"

                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label htmlFor="departments" md={2}>Phòng ban</Label>
                                        <Col md={10} >
                                            <Control.select model=".departments" name="department" className="form-control" >
                                                <option value="Dept01">Sale</option>
                                                <option value="Dept02">HR</option>
                                                <option value="Dept03">Marketing</option>
                                                <option value="Dept04">IT</option>
                                                <option value="Dept05">Finance</option>
                                            </Control.select >
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Label htmlFor="salaryScale" md="2">Hệ số lương</Label>
                                        <Col md={10} >
                                            <Control.text type="number" model=".salaryScale" name="salaryScale"
                                                validators={{
                                                    required,
                                                    isEvenNum
                                                }}
                                                className="form-control"
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".salaryScale"
                                                messages={{
                                                    required: "Yêu cầu nhập",
                                                    isEvenNum: 'Yêu cầu nhập giá trị nguyên'
                                                }}
                                                show="touched"

                                            />
                                        </Col>

                                    </Row>

                                    <Row>
                                        <Label htmlFor="annualLeave" md="2">Số ngày nghỉ </Label>
                                        <Col md={10} >
                                            <Control.text type="number" model=".annualLeave" name="annualLeave"
                                                validators={{
                                                    required,
                                                    isEvenNum
                                                }}
                                                className="form-control"
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".annualLeave"
                                                messages={{
                                                    required: "Yêu cầu nhập",
                                                    isEvenNum: 'Yêu cầu nhập giá trị nguyên'
                                                }}
                                                show="touched"

                                            />
                                        </Col>

                                    </Row>

                                    <Row>
                                        <Label htmlFor="overTime" md="2">Số ngày làm thêm</Label>
                                        <Col md={10} >
                                            <Control.text
                                                validators={{
                                                    required,
                                                    isEvenNum
                                                }}
                                                type="number" model=".overTime" name="overTime"
                                                className="form-control"
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".overTime"
                                                messages={{
                                                    required: "Yêu cầu nhập",
                                                    isEvenNum: 'Yêu cầu nhập giá trị nguyên'
                                                }}
                                                show="touched"

                                            />
                                        </Col>

                                    </Row>
                                    <Button type="submit" color="primary"> Thêm </Button>
                                </LocalForm>
                            </ModalBody>
                        </Modal>
                        <Button onClick={this.toggle}><i className="fa fa-plus"></i></Button>
                    </div>
                    <div className="col-md-6">
                        <LocalForm onSubmit={this.handleFind}>
                            <Row className="form-group" >
                                <Col md={10}>
                                    <Control.text model=".nameStaff" className="form-control" />
                                </Col>
                                <Col md={2} >
                                    <Button color="primary" type="submit">Tìm</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
                <div className="row">
                    <ListOfStaffs
                        staffs={this.state.staffs}
                        staffsLoading={this.props.staffsLoading}
                        staffsFailed={this.props.staffsFailed}
                    />
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    postStaff: (staffPosted) => { dispatch(postStaff(staffPosted)) },
    fetchStaffs: () => dispatch(fetchStaffs())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListStaffs)