import { Card, CardImg, CardBody } from 'reactstrap';
import React from 'react';
import {
    Breadcrumb, BreadcrumbItem, Row, Col, Button,
    Modal, ModalBody, ModalHeader, Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from '../common/LoadingComponent';
import { Fade, Stagger, FadeTransform } from 'react-animation-components'
import * as moment from 'moment'
import { postStaff } from '../../redux/ActionCreator';
import { connect } from 'react-redux';


const required = (val) => val && val.length;
const maxLength = (len) => val => !val || val.length <= len;
const minLength = (len) => val => !val || val.length >= len;

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


class ListStaffs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: this.props.staffs,
            isOpen: false,
            filter: this.props.staffs
        }
        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFind = this.handleFind.bind(this);

    }

    // modal box
    toggle() {
        this.setState({ isOpen: !this.state.isOpen })
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
            doB: moment(value.dOB, "YYYY-MM-DD").format('MM/DD/YYYY'),
            departmentId: value.departments,
            salaryScale: +value.salaryScale,
            startDate: moment(value.startDate, "YYYY-MM-DD").format('MM/DD/YYYY'),
            annualLeave: +value.annualLeave,
            overTime: +value.overTime
        }
        this.props.postStaff(staffPosted)
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
                                <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                    <Row className="form-group">
                                        <Label htmlFor="name" md="2">Tên</Label>
                                        <Col md={10} >
                                            <Control model=".name"
                                                className="form-control"
                                                validators={{
                                                    required, maxLength: maxLength(30), minLength: minLength(3)
                                                }}
                                                onSubmit={(value) => this.getValue(value)}
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
                                                className="text-danger"
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
                                            <Control type="number" model=".salaryScale" name="salaryScale"
                                                className="form-control"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label htmlFor="annualLeave" md="2">Số ngày nghỉ </Label>
                                        <Col md={10} >
                                            <Control type="number" model=".annualLeave" name="annualLeave"
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
                                    <Button type="submit" onClick={this.toggle} color="primary"> Thêm </Button>
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



const mapDispatchToProps = (dispatch) => ({
    postStaff: (staffPosted) => { dispatch(postStaff(staffPosted)) },
})

export default connect(null, mapDispatchToProps)(ListStaffs)