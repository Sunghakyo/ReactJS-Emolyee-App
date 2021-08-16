import React, { Component } from "react";
import Moment from "react-moment";
import "moment-timezone";

class DetailStaffs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Detail = this.props.staffs.map((staff) => {
      return (
        <div className="card col-12 col-md-6 col-lg-4">
          <h2>Họ và tên: {staff.name}</h2>
          <p>
            Ngày sinh: <Moment format="DD/MM/YYYY">{staff.doB}</Moment>
          </p>
          <p>
            Ngày vào công ty:{" "}
            <Moment format="DD/MM/YYYY">{staff.startDate}</Moment>
          </p>
          <p>Phòng ban: {staff.department.name}</p>
          <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
          <p>Số ngày làm thêm: {staff.overTime}</p>
        </div>
      );
    });

    return <div>{Detail}</div>;
  }
}

export default DetailStaffs;
