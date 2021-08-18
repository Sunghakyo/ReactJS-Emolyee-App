import { Component } from "react";

class Liststaffs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { SelectedStaff, OnChangeColumn } = this.props;
    const listStaff = this.props.Staffs.map((staff) => {
      return (
        (OnChangeColumn === true) ?
          (<div
            className="col-12 col-md-6 col-xl-3 card staff-list"
            onClick={() => {
              this.props.onStaffClick(staff);
            }}
          >
            <p>{staff.name}</p>
          </div>) : (<div
            className="col-12 col-md-6 col-xl-4 card staff-list"
            onClick={() => {
              this.props.onStaffClick(staff);
            }}
          >
            <p>{staff.name}</p>
          </div>)
      );
    });

    return (
      <div className="container list">
        <div className="row ">{listStaff}</div>
        {!SelectedStaff && <p className="text-center">Nhấn vào tên nhân viên để hiện thông tin</p>}
      </div>
    );
  }
}

export default Liststaffs;
