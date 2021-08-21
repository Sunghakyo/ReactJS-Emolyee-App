import React from 'react';
import { STAFFS } from "./staffs";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './HomeComponent';
import Header from "./HeaderComponent";
import Footer from './FooterComponent';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS
        }
    }

    render() {
        const { staffs } = this.state;
        const HomePage = () => {
            return (
                <Home staffs={staffs} />
            )
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )

    }
}


export default Main;