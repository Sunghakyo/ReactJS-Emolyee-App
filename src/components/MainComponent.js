import React from 'react';
import { DEPARTMENTS } from './Staffs';
import { STAFFS } from "./Staffs";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './HomeComponent';
import Header from "./HeaderComponent";
import Footer from './FooterComponent';
import DetailStaff from './DetailStaffComponent';
import DepartMents from "./DepartMentComponent";
import SalarySheet from "./SalarySheetComponent";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS
        }

    }

    render() {
        const { staffs, departments } = this.state;


        // Component render Staff
        const staffId = ({ match }) => {
            return <DetailStaff
                staff={staffs.filter((staff) => staff.id === parseInt(match.params.id), 10)[0]}
            />
        }

        // Component render list
        const HomePage = () => {
            return (
                <Home staffs={staffs} />
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


export default Main;