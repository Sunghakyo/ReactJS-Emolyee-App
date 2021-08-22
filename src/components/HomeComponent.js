import { Card, CardImg, CardBody } from 'reactstrap';
import React from 'react';
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function Staff({ staffs }) {
    return staffs.map((staff, index) => {
        return (
            <div key={index} className="col-6 col-md-4 col-xl-2 mb-3">
                <Link to={`menu/${staff.id}`}>
                    <Card className="text-center ">
                        <CardImg src="assets/images/alberto.png" />
                        <CardBody>
                            <h3 className="text-reset text-decoration-none">{staff.name}</h3>
                        </CardBody>
                    </Card>
                </Link >
            </div >

        )

    })
}

const Home = (props) => {
    const { staffs } = props
    return (
        <div className="container">
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