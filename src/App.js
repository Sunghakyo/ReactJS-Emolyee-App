import { Component } from "react";
import DetailStaff from "./components/detailStaff";
import Liststaffs from "./components/liststaffs";
import { STAFFS } from "./components/staffs";
import { Navbar, NavbarBrand } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Staffs: STAFFS,
      SelectedStaff: null,
    };
  }

  onStaffClick(SelectedStaff) {
    this.setState({ SelectedStaff: SelectedStaff })
  }

  render() {

    return (
      <div className="container-fuild">
        <Navbar dark color="primary">
          <NavbarBrand>
            <h1 className="text-center">Ứng dụng quản lý nhân sự v1.0</h1>
          </NavbarBrand>
        </Navbar>
        <Liststaffs
          Staffs={this.state.Staffs}
          onStaffClick={(SelectedStaff) => { this.onStaffClick(SelectedStaff) }}
          SelectedStaff={this.state.SelectedStaff}
        />
        <DetailStaff Staff={this.state.SelectedStaff} />
      </div>
    );
  }
}

export default App;
