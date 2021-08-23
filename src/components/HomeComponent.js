import { Card, CardImg, CardBody } from 'reactstrap';
import React from 'react';
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: this.props.staffs,
            search: ""
        }
    }

    render() {
        const handleChangeText = e => {
            if (e.target.value === "") {
                this.setState({
                    staffs: this.props.staffs,
                    search: "e.target.value"
                })
                return
            }
            //  xử lý nếu chưa nhập tên nhân viên tìm kiếm

            let newStaff = this.props.staffs
            console.log(this.props.staffs)
            console.log([...this.props.staffs])
            newStaff = newStaff.filter((staff) => staff.name.includes(e.target.value))
            this.setState({
                staffs: newStaff,
                search: e.target.value,
            })
            // đặt lại state khi nhập tên nhân viên
        }


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
                <div className="row ">
                    <Breadcrumb className="mt-3" >
                        <BreadcrumbItem ><Link className="text-reset text-decoration-none" to="/home">Nhân Viên</Link></BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-4 align-left mb-3">
                        <input type="text" className="form-control" placeholder="Tìm kiếm nhân viên" onChange={(e) => handleChangeText(e)} />
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