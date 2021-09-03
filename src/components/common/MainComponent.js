import React from 'react';
import ListStaffs from '../staffs/ListStaffs';
import Header from "../Layout/HeaderComponent";
import Footer from '../Layout/FooterComponent';
import { HomePage } from '../Layout/HomeComponent'
import Departments from '../departments/DepartmentsComponent';
import SalarySheet from '../salary/SalarySheetComponent';
import DetailStaff from '../staffs/DetailStaffComponent';
import { StaffOfDepart } from '../departments/StaffOfDepart';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchStaffs, fetchDepartments, fetchSalary } from '../../redux/ActionCreator';

const mapStateToProps = (state) => ({
    staffs: state.staffs,
    depart: state.depart,
    salary: state.salary
})

const mapDispatchToProps = (dispatch) => ({
    fetchStaffs: () => dispatch(fetchStaffs()),
    fetchDepart: () => dispatch(fetchDepartments()),
    fetchSalary: () => dispatch(fetchSalary()),
})

class Main extends React.Component {

    componentDidMount() {
        this.props.fetchStaffs()
        this.props.fetchDepart()
        this.props.fetchSalary()
    }

    render() {
        // Component render detailStaff
        const staffId = ({ match }) => {
            const staff = this.props.staffs.staffs.filter(staff => staff.id === parseInt(match.params.id, 10))[0];
            const departName = this.props.depart.departments.find(depart => depart.id === staff.departmentId);
            return <DetailStaff
                staff={staff}
                departName={departName}
            />
        }

        //staff of depart
        const departOfStaffs = ({ match }) => {
            const depart = this.props.depart.departments.find(depart => depart.id === match.params.departId)
            return <StaffOfDepart
                staffs={this.props.staffs.staffs.filter(staff => staff.departmentId === match.params.departId)}
                depart={depart}
            />
        }

        // Component render list
        const ListStaff = () => {
            return (
                <ListStaffs
                    staffs={this.props.staffs.staffs}
                    staffsLoading={this.props.staffs.isLoading}
                    staffsFailed={this.props.staffs.errMess}
                    departments={this.props.depart.departments}
                />
            )
        }

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route exact path="/home" component={() => <HomePage />} />
                            <Route exact path="/home/staffs" component={ListStaff} />
                            <Route exact path="/home/staffs/:id" component={staffId} />
                            <Route exact path="/home/salary" component={() => <SalarySheet staffs={this.props.salary.salary} />} />
                            <Route exact path="/home/departments" component={() => <Departments
                                departments={this.props.depart.departments}
                                isLoading={this.props.depart.isLoading}
                                departFailed={this.props.depart.errMess} />} />
                            <Route exact path='/home/department/:departId' component={departOfStaffs} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div >
        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));