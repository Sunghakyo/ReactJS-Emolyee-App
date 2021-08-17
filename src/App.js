import React, { Component } from "react";
import { STAFFS } from "./components/staffs";
import { Navbar, NavbarBrand } from "reactstrap";
import Liststaffs from "./components/liststaffs";
import DetailStaffs from "./components/detailStaff";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      selectStaff: null,
    };
  }

  render() {
    const { staffs, selectStaff } = this.state;
    const onClick = (selectStaff) => {
      this.setState({ ...this.state, selectStaff });
    };

    return (
      <div className="container-fuild">
        <Navbar dark color="primary">
          <NavbarBrand>
            <h1>Ứng dụng quản lý nhân sự v1.0</h1>
          </NavbarBrand>
        </Navbar>
        <Liststaffs staffs={this.state.staffs} />
        <DetailStaffs staffs={this.state.staffs} />
      </div>
    );
  }
}

export default App;
