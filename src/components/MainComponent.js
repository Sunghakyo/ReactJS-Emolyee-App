import React from 'react';
import STAFFS from "./staffs";



class Main extends React.Component {
    construcstor(props) {
        super(props);
        this.state = {
            staffs: STAFFS

        }
    }
}


export default Main;