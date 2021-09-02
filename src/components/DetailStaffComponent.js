import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Col, Label, Row, Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import React, { useState } from 'react';

const required = (val) => val && val.length;
const maxLength = (len) => val => !val || val.length <= len;
const minLength = (len) => val => !val || val.length >= len;

// Render Staff
function RenderStaffs({ staff, departName, editStaff }) {
  const [isOpen, setOpen] = useState(false);

  return (<>
    <div className="col-12 col-md-2 col-lg-2">
      <img src="/assets/images/alberto.png" alt="avatar" />
    </div>
    <div className=" col-12 col-md-10 col-lg-10 ">
      <h2>Họ và tên: {staff.name}</h2>
      <p> Ngày sinh: {staff.doB} </p>
      <p>Ngày vào công ty:{staff.startDate}</p>
      <p>Phòng ban:{departName.name} </p>
      <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
      <p>Hệ số lương: {staff.salaryScale}</p>
      <p>Số ngày làm thêm: {staff.overTime}</p>
      <button className="btn btn-primary mb-3" onClick={() => { setOpen(!isOpen); }}> chỉnh sửa</button>
    </div>

    <ModalEdit
      isOpen={isOpen}
      setOpen={setOpen}
      staff={staff}
      editStaff={editStaff}
    />
  </>
  )
}

// Modal Edit staff
function ModalEdit({ isOpen, setOpen, id, editStaff, staff }) {

  const datePartsdoB = staff.doB.split('/');
  const datePartsStartDate = staff.startDate.split('/');
  staff = { ...staff, ...{ doB: `${+datePartsdoB[2]}-${datePartsdoB[1]}-${datePartsdoB[0]}`, startDate: `${+datePartsStartDate[2]}-${datePartsStartDate[1]}-${datePartsStartDate[0]}` } }

  const handleSubmit = (value) => {
    setOpen(!isOpen);
    const staffId = id
    const staffEdit = {
      id: staffId,
      name: value.name,
      dOB: value.dOb,
      startDate: value.startDate,
      department: value.departments,
      salaryScale: value.salaryScale,
      annualLeave: value.annualLeave,
      overTime: value.overTime
    }
    editStaff(staffId, staffEdit)
  }

  return (
    <Modal isOpen={isOpen} toggle={() => setOpen(!isOpen)} >
      <ModalHeader>Chỉnh sửa thông tin</ModalHeader>
      <ModalBody >
        <LocalForm onSubmit={values => handleSubmit(values)} model="staff" initialState={staff}>
          <Row className="form-group">
            <Label htmlFor="name" md="2">Tên</Label>
            <Col md={10} >
              <Control model="staff.name"
                className="form-control"
                validators={{
                  required, maxLength: maxLength(30), minLength: minLength(3)
                }}
              />
              <Errors
                className='text-danger'
                model="staff.name"
                messages={{
                  required: "Yêu cầu nhập",
                  maxLength: "yêu cầu nhập tối đa 30 ký tự ",
                  minLength: "yêu cầu nhập tối thiểu 3 ký tự"
                }}
              />
            </Col>
          </Row>
          <Row>
            <Label htmlFor="doB" md="2">Ngày sinh</Label>
            <Col md={10} >
              <Control type="date" model="staff.doB" name="doB"
                className="form-control"
                validators={{
                  required
                }}
              />
              <Errors
                className="text-danger"
                model="staff.doB"
                messages={{
                  required: "Yêu cầu nhập"
                }}
              />
            </Col>
          </Row>
          <Row>
            <Label htmlFor="startDate" md="2">Ngày vào công ty</Label>
            <Col md={10} >
              <Control type="date" model="staff.startDate" name="startDate"
                className="form-control"
                validators={{
                  required
                }}
              />
              <Errors
                className='text-danger'
                model="staff.startDate"
                messages={{
                  required: "Yêu cầu nhập"
                }}
              />
            </Col>
          </Row>
          <Row>
            <Label htmlFor="departments" md={2}>Phòng ban</Label>
            <Col md={10} >
              <Control.select model="staff.departments" name="department" className="form-control" >
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
              <Control
                type="number" model="staff.salaryScale" name="salaryScale"
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
          <Button type="submit" onClick={() => handleSubmit} color="primary"> Thêm </Button>
        </LocalForm>
      </ModalBody>
    </Modal>
  )
}

// Container Staff Detail
const DetailStaff = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem> <Link to="/home">Nhân viên</Link> </BreadcrumbItem>
          <BreadcrumbItem active>{props.staff.name} </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        {/* component render  staff */}
        <RenderStaffs
          staff={props.staff}
          departName={props.departName}
          editStaff={props.editStaff}
        />
      </div>
    </div>
  )
}

export default DetailStaff;
