import React from 'react';
import Home from './HomeComponent';
import Header from "./HeaderComponent";
import Footer from './FooterComponent';
import DepartMents from './DepartMentComponent';
import SalarySheet from './SalarySheetComponent';
import DetailStaff from './DetailStaffComponent';
import { DEPARTMENTS } from './Staffs';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchStaffs } from '../redux/ActionCreator';

const mapStateToProps = (state) => ({
    staffs: state.staffs
})

const mapDispatchToProps = (dispatch) => ({
    fetchStaffs: () => dispatch(fetchStaffs()),
})

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: this.props.staffs,
            departments: DEPARTMENTS
        }
    }

    componentDidMount() {
        this.props.fetchStaffs()
    }

    onAddStaff(newStaffs) {
        this.setState({ staffs: newStaffs })
    }

    render() {
        const { departments } = this.state;

        // Component render Staff
        const staffId = ({ match }) => {
            return <DetailStaff
                staff={this.props.staffs.filter((staff) => staff.id === parseInt(match.params.id), 10)[0]}
            />
        }

        // Component render list
        const HomePage = () => {
            return (
                <Home
                    staffs={this.props.staffs.staffs}
                    staffsLoading={this.props.staffs.isLoading}
                    staffsFailed={this.props.staffs.errMess}
                    onSubmit={(newStaffs => this.onAddStaff(newStaffs))} />
            )
        }


        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/home/:id" component={staffId} />
                    <Route path="/salary" component={() => <SalarySheet staffs={this.props.staffs} />} />
                    <Route path="/departments" component={() => <DepartMents departments={departments} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )

    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));