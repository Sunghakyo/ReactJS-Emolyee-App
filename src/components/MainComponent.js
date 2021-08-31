import React from 'react';
import Home from './HomeComponent';
import Header from "./HeaderComponent";
import Footer from './FooterComponent';
import Departments from './DepartmentsComponent';
import SalarySheet from './SalarySheetComponent';
import DetailStaff from './DetailStaffComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { DEPARTMENTS } from './Staffs';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchStaffs, fetchDepartments } from '../redux/ActionCreator';

const mapStateToProps = (state) => ({
    staffs: state.staffs,
    depart: state.depart
})

const mapDispatchToProps = (dispatch) => ({
    fetchStaffs: () => dispatch(fetchStaffs()),
    fetchDepart: () => dispatch(fetchDepartments()),
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
        this.props.fetchDepart()
    }

    onAddStaff(newStaffs) {
        this.setState({ staffs: newStaffs })
    }

    render() {

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
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route exact path="/home" component={HomePage} />
                            <Route exact path="/home/:id" component={staffId} />
                            <Route path="/salary" component={() => <SalarySheet staffs={this.props.staffs.staffs} />} />
                            <Route path="/departments" component={() => <Departments
                                departments={this.props.depart.departments}
                                isLoading={this.props.depart.isLoading}
                                departFailed={this.props.depart.errMess} />} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        )

    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));