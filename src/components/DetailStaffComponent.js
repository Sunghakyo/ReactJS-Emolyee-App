
import Moment from "react-moment";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderStaffs({ staff }) {
  return (<>
    <div className="col-12 col-md-2 col-lg-2">
      <img src="/assets/images/alberto.png" alt="avatar" />
    </div>
    <div className=" col-12 col-md-10 col-lg-10 ">
      <h2>Họ và tên: {staff.name}</h2>
      <p> Ngày sinh: <Moment format="DD/MM/YYYY">{staff.dOB}</Moment> </p>
      <p>Ngày vào công ty:<Moment format="DD/MM/YYYY">{staff.startDate}</Moment></p>
      <p>Phòng ban: {staff.department?.name}</p>
      <p>Số ngày nghỉ còn lại: {staff?.annualLeave}</p>
      <p>Số ngày làm thêm: {staff?.overTime}</p>
    </div>
  </>
  )
}

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
        {/* component render thẻ staff */}
        <RenderStaffs staff={props.staff} />
        {console.log(props.staff)}
      </div>
    </div>
  )
}

export default DetailStaff;
