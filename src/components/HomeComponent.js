import { Card, CardImg, CardBody } from 'reactstrap';
import React from 'react';
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function Staff({ staffs }) {
    return staffs.map((staff) => {
        return (
            <div className="col-6 col-md-4 col-xl-2 mb-3">
                <Card>
                    <CardImg src="assets/images/alberto.png" />
                    <CardBody>
                        <h3>{staff.name}</h3>
                    </CardBody>
                </Card>
            </div>
        )

    })
}

const Home = (props) => {
    const { staffs } = props
    return (
        <div ClassName="container">
            <div className="row ">
                <Breadcrumb className="mt-3" >
                    <BreadcrumbItem ><Link className="text-reset text-decoration-none" to="/home">Nhân Viên</Link></BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                <Staff staffs={staffs} />
            </div>
        </div>
    )

}



export default Home;