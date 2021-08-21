import React from 'react';
import STAFFS from "./staffs";
import { Switch, Route, Redirect } from "react-router-dom";



class Main extends React.Component {
    construcstor(props) {
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
                <Switch>
                    <Route path="/home" Component={Home} />
                    <Redirect to="/home" />
                </Switch>

            </div>
        )

    }
}


export default Main;