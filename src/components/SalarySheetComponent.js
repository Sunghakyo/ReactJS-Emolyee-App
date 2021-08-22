import React from "react"
import { Card, CardTitle, CardBody, Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Link } from "react-router-dom"

const SalarySheet = (props) => {

    const SalaryCard = props.staffs.map((staff) => {
        const basicSalary = 3000000;
        const overTimeSalary = 200000;
        const salary = parseInt((staff.salaryScale * basicSalary) + (staff.overTime * overTimeSalary));

        return (
            <div className="col-12 col-md-6 col-lg-4">
                <Card className="mt-3 mb-3">
                    <CardTitle className="text-center">
                        <h3>{staff.name}</h3>
                    </CardTitle>
                    <CardBody className="text-center">
                        <p>Mã nhân viên: {staff.id}</p>
                        <p>Hệ số lương : {staff.salaryScale}</p>
                        <p>Số giờ làm thêm: {staff.overTime}</p>
                        <div className="output text-center">
                            {salary}
                        </div>
                    </CardBody>
                </Card >
            </div >)
    })




    return (
        <div className="container">
            <div className="row">
                <Breadcrumb className="mt-3 mb-3">
                    <BreadcrumbItem>
                        <Link className="text-reset text-decoration-none" to="/home" >Nhân Viên</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link className="text-reset text-decoration-none" to="/departments" >Bảng Lương</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                {SalaryCard}
            </div>
        </div>
    )

}

export default SalarySheet;