import { Component } from "react";

class Liststaffs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { SelectedStaff } = this.props;
    const listStaff = this.props.Staffs.map((staff, index) => {
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
      <div className="container list">
        <div className="row ">{listStaff}</div>
        {!SelectedStaff && <p>Nhấn vào tên nhân viên để hiện thông tin</p>}
      </div>
    );
  }
}

export default Liststaffs;
