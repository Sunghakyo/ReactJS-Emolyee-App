import React from 'react';
import { STAFFS } from "./staffs";
import { Switch, Route, Redirect } from "react-router-dom";
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
        const Home = () => {
            return (
                <Home />
            )
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" Component={Home} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )

    }
}


export default Main;