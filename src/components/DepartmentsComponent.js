import { Card, CardTitle, CardBody } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { Fade, Stagger, FadeTransform } from 'react-animation-components';

// component render thẻ phòng ban
function Department({ depart, departLoading, departFailed }) {
    if (departLoading) {
        return (
            <Loading />
        )
    }
    else if (departFailed) {
        return (
            <div className="col-12">
                <h5>{departFailed}</h5>
            </div>
        )
    }
    else {
        return depart.map(department => {
            return (
                <div className="col-12 col-md-6 col-lg-4">
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Stagger in>
                            <Fade in>
                                <Card className="mt-3 mb-3">
                                    <CardTitle>
                                        <h3>{department.name}</h3>
                                    </CardTitle>
                                    <CardBody>
                                        <p>Số lượng nhân viên {department.numberOfStaff}</p>
                                    </CardBody>
                                </Card>
                            </Fade>
                        </Stagger>
                    </FadeTransform>
                </div>
            )
        })
    }
}

const DepartMents = (props) => {
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
                <Department
                    depart={props.departments}
                    departLoading={props.isLoading}
                    departFailed={props.departFailed} />
            </div>
        </div>
    )
}

export default DepartMents;