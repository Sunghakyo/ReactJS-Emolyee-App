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
<<<<<<< HEAD
      selectStaff: null,
=======
      selectedStaff: null,
>>>>>>> b65d921f0297fabe312dc90a7e73229fb4ce3f33
    };
  }

  render() {
    const { selectStaff, staffs } = this.state;
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
        <Liststaffs
          staffs={staffs}
          onClick={onClick}
          selectedStaff={selectStaff}
        />
        <DetailStaffs staff={selectStaff} />
      </div>
    );
  }
}

export default App;
