import React from 'react';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from './HomeComponent';
import Header from "./HeaderComponent";
import Footer from './FooterComponent';
import DepartMents from './DepartMentComponent';
import SalarySheet from './SalarySheetComponent';
import DetailStaff from './DetailStaffComponent';
import { connect } from 'react-redux';



const mapStateToProps = state => {
    return {
        staffs: state.staffs,
        departments: state.departments
    }


}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: this.props.staffs
        }
    }

    addStaff(staffs) {
        this.setState({
            staffs: staffs
        })
    }

    render() {
        const { departments } = this.props;
        const { staffs } = this.state;
        // Component render Staff
        const staffId = ({ match }) => {
            return <DetailStaff
                staff={staffs.filter((staff) => staff.id === parseInt(match.params.id), 10)[0]}
            />
        }

        // Component render list
        const HomePage = () => {
            return (
                <Home staffs={staffs} department={departments}
                    onAddNewStaff={staffs => this.addStaff(staffs)}
                />
            )
        }


        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/home/:id" component={staffId} />
                    <Route path="/salary" component={() => <SalarySheet staffs={staffs} />} />
                    <Route path="/departments" component={() => <DepartMents departments={departments} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )

    }
}


export default withRouter(connect(mapStateToProps)(Main));