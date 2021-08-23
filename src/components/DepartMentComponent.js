import { Card, CardTitle, CardBody } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";

// component render thẻ phòng ban
function DepartMent(props) {
    const depart = props.departments.map((department) => {
        return (
            <div className="col-12 col-md-6 col-lg-4">
                <Card className="mt-3 mb-3">
                    <CardTitle>
                        <h3>{department.name}</h3>
                    </CardTitle>
                    <CardBody>
                        <p>Số lượng nhân viên {department.numberOfStaff}</p>
                    </CardBody>
                </Card>
            </div>
        )

    })

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb className="mt-3 mb-3">
                    <BreadcrumbItem>
                        <Link className="text-reset text-decoration-none" to="/home" >Nhân Viên</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link className="text-reset text-decoration-none" to="/departments" >Ban Phòng</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                {depart}
            </div>
        </div>
    )
}



export default DepartMent;