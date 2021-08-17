import React, { Component } from "react";
import { STAFFS } from "./components/staffs";
import { Navbar, NavbarBrand } from "reactstrap";
import Layout from "./components/liststaffs";
import DetailStaffs from "./components/detailStaff";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      selectedStaff: null,
    };
  }

  render() {
    return (
      <div className="container-fuild">
        <Navbar dark color="primary">
          <NavbarBrand>
            <h1>Ứng dụng quản lý nhân sự v1.0</h1>
          </NavbarBrand>
        </Navbar>
        <Layout staffs={staffs} />
        <DetailStaffs staff={staffs} />
      </div>
    );
  }
}

export default App;
