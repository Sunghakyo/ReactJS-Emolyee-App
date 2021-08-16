import React, { Component } from "react";
import { DEPARTMENTS } from "./components/staffs";
import { Navbar, NavbarBrand } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staff: DEPARTMENTS,
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
      </div>
    );
  }
}

export default App;
