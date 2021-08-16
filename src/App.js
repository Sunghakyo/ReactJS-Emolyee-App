import React, { Component } from "react";
import { STAFFS } from "./components/staffs";
import { Navbar, NavbarBrand } from "reactstrap";
import Layout from "./components/liststaffs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <NavbarBrand>
            <h1>Ứng dụng quản lý nhân sự v1.0</h1>
          </NavbarBrand>
        </Navbar>
        <Layout staffs={this.state.staffs} />
      </div>
    );
  }
}

export default App;
