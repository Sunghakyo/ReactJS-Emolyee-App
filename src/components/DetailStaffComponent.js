import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStaffs({ staff }) {
  return (<>
    <div className="col-12 col-md-2 col-lg-2">
      <img src="/assets/images/alberto.png" alt="avatar" />
    </div>
    <div className=" col-12 col-md-10 col-lg-10 ">
      <h2>Họ và tên: {staff.name}</h2>
      <p> Ngày sinh: {staff.doB} </p>
      <p>Ngày vào công ty:{staff.startDate}</p>
      <p>Phòng ban: {staff.department}</p>
      <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
      <p>Số ngày làm thêm: {staff.overTime}</p>
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
      </div>
    </div>
  )

}

export default DetailStaff;
