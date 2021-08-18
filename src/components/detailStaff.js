import { Component } from "react";
import Moment from "react-moment";

class DetailStaff extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        {this.props.Staff && (
          <div className="card col-12 col-md-6 col-lg-4 detail">
            <h2>Họ và tên: {this.props.Staff.name}</h2>
            <p>
              Ngày sinh:{" "}
              <Moment format="DD/MM/YYYY">{this.props.Staff.doB}</Moment>
            </p>
            <p>
              Ngày vào công ty:{" "}
              <Moment format="DD/MM/YYYY">{this.props.Staff.startDate}</Moment>
            </p>
            <p>Phòng ban: {this.props.Staff.department.name}</p>
            <p>Số ngày nghỉ còn lại: {this.props.Staff.annualLeave}</p>
            <p>Số ngày làm thêm: {this.props.Staff.overTime}</p>
          </div>
        )}
      </div>
    );
  }
}

export default DetailStaff;
