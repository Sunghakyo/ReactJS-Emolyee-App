import { Component } from "react";
import DetailStaff from "./components/detailStaff";
import Liststaffs from "./components/liststaffs";
import { STAFFS } from "./components/staffs";
import { Navbar, NavbarBrand } from "reactstrap";
import ChangeColumn from "./components/changeColumn";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Staffs: STAFFS,
      SelectedStaff: null,
      OnChangeColumn: null
    };
    this.onClickChange = this.onClickChange.bind(this);
  }

  onStaffClick(SelectedStaff) {
    this.setState({ SelectedStaff: SelectedStaff })
  }

  onClickChange(OnChangeColumn) {
    this.setState({ OnChangeColumn: OnChangeColumn })
  }

  render() {
    const { Staffs, SelectedStaff, OnChangeColumn } = this.state
    return (
      <div className="container-fuild" >
        <Navbar dark color="primary">
          <NavbarBrand>
            <h1 className="text-center">Ứng dụng quản lý nhân sự v1.0</h1>
          </NavbarBrand>
        </Navbar>
        <Liststaffs
          Staffs={Staffs}
          onStaffClick={(SelectedStaff) => { this.onStaffClick(SelectedStaff) }}
          SelectedStaff={SelectedStaff}
          OnChangeColumn={OnChangeColumn}
        />
        <DetailStaff Staff={SelectedStaff} />
        <ChangeColumn
          OnChangeColumn={OnChangeColumn}
          onClickChange={this.onClickChange} />
      </div >
    );
  }
}

export default App;
