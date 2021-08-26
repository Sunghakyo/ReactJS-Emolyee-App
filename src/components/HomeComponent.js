import { Card, CardImg, CardBody } from 'reactstrap';
import React from 'react';
import {
    Breadcrumb, BreadcrumbItem, Form, Row, Input, Col,
} from "reactstrap";
import { Link } from "react-router-dom";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: this.props.staffs,
            isOpen: false,
            search: "",

        }
        this.onChangeSearch = this.onChangeSearch.bind(this)

    }


    // tìm kiếm nhân viên
    onChangeSearch(e) {
        const value = e.target.value
        if (value === "") {
            this.setState({ staffs: this.props.staffs, search: value })
            return
        };
        this.setState({
            search: value,
            staffs: this.state.staffs.filter(staff => staff.name.toLowerCase().includes(value))
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
                    <div className="col-md-6">
                        <Form onSubmit={this.onSubmit}>
                            <Row className="form-group" >
                                <Col md={10}>
                                    <Input type="text"
                                        value={this.state.search}
                                        onChange={this.onChangeSearch}
                                    />
                                </Col>
                            </Row>
                        </Form>
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