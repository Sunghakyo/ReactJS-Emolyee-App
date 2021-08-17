import React, { Component } from "react";
import Moment from "react-moment";
import "moment-timezone";

class DetailStaffs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.staff && (
          <div className="card col-12 col-md-6 col-lg-4">
            <h2>Họ và tên: {this.props.staff.name}</h2>
            <p>
              Ngày sinh:{" "}
              <Moment format="DD/MM/YYYY">{this.props.staff.doB}</Moment>
            </p>
            <p>
              Ngày vào công ty:{" "}
              <Moment format="DD/MM/YYYY">{this.props.staff.startDate}</Moment>
            </p>
            <p>Phòng ban: {this.props.staff.department.name}</p>
            <p>Số ngày nghỉ còn lại: {this.props.staff.annualLeave}</p>
            <p>Số ngày làm thêm: {this.props.staff.overTime}</p>
          </div>
        )}
      </div>
    );
  }
}

export default DetailStaffs;
