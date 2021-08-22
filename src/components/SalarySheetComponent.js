import React from "react"
import { Card, CardTitle, CardBody, Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Link } from "react-router-dom"


class SalarySheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: this.props.staffs
        }
        this.sortSalaryAsc = this.sortSalaryAsc.bind(this)
        this.sortIdAsc = this.sortIdAsc.bind(this)
    };

    sortSalaryAsc() {
        this.setState({
            staffs: this.props.staffs.sort((a, b) => a.salaryScale - b.salaryScale)
        }
        );
    }
    sortIdAsc() {
        this.setState({
            staffs: this.props.staffs.sort((a, b) => a.id - b.id)
        }
        );
    }

    render() {
        //  UI thẻ bảng lương nhân viên
        const SalaryCard = this.state.staffs.map((staff) => {
            const basicSalary = 3000000;
            const overTimeSalary = 200000;
            const salary = parseInt((staff.salaryScale * basicSalary) + (staff.overTime * overTimeSalary));
            return (
                <div key={staff.id} className="col-12 col-md-6 col-lg-4">
                    <Card className="mt-3 mb-3">
                        <CardTitle className="text-center">
                            <h3>{staff.name}</h3>
                        </CardTitle>
                        <CardBody className="text-center">
                            <p>Mã nhân viên: {staff.id}</p>
                            <p>Hệ số lương : {staff.salaryScale}</p>
                            <p>Số giờ làm thêm: {staff.overTime}</p>
                            <div className="output text-center">
                                {salary} {/* lương của nhân viên */}
                            </div>
                        </CardBody>
                    </Card >
                </div >)

        });

        // UI trang Bảng lương
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
                    {SalaryCard}  {/*Thẻ lương của nhân viên */}
                </div>
                <div className="row mb-3">
                    <div className=" col-3  d-flex mx-auto">
                        <button className="btn btn-primary btn-block" onClick={this.sortSalaryAsc} >Sắp xếp nhân viên theo hệ số lương</button>
                    </div>
                    <div className=" col-3  d-flex mx-auto">
                        <button className="btn btn-primary btn-block" onClick={this.sortIdAsc} >Sắp xếp nhân viên theo mã nhân viên</button>
                    </div>
                </div>
            </div >
        )
    }
}


export default SalarySheet;