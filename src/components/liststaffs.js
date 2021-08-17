import React, { Component } from "react";

class Liststaffs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const listStaff = this.props.staffs.map((staff) => {
      return (
        <div className="col-12 col-md-6 col-xl-4 card staff-list">
          <p>{staff.name}</p>
        </div>
      );
    });

    return (
      <div className="container-fuild">
        <div className="row ">{listStaff}</div>
        <p>Nhấn vào tên nhân viên để hiện thông tin</p>
      </div>
    );
  }
}

export default Liststaffs;
