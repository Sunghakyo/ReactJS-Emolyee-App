import React, { Component } from "react";

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedStaff } = this.props;
    const listStaff = this.props.staffs.map((staff, index) => {
      return (
        <div
          key={index}
          className="col-12 col-md-6 col-xl-4 card staff-list"
          onClick={() => {
            this.props.onStaffClick(staff);
          }}
        >
          <p>{staff.name}</p>
        </div>
      );
    });

    return (
      <div className="container-fluid">
        <div className="row ">{listStaff}</div>
        {!selectedStaff && <p>Nhấn vào tên nhân viên để hiện thông tin</p>}
      </div>
    );
  }
}

export default Layout;
