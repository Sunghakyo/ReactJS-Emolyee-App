import { Card, CardImg, CardBody } from 'reactstrap';
import React from 'react';
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: this.props.staffs,
        }
    }


    render() {
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
                    {liststaff}
                </div>
            </div>
        )

    }
}


export default Home;