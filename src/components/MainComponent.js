import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";

class Main extends Component {
    constructor(prop) {
        super(prop);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }


    onDishSelect(dish) {
        this.setState({ selectedDish: dish });

    }

    render() {

        return (
            <div >
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristoreante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu
                    dishes={this.state.dishes}
                    onClick={(dish) => { this.onDishSelect(dish) }}
                    selectedDish={this.state.selectedDish}
                />
                <DishDetail
                    selectedDish={this.state.selectedDish}
                />
            </div>
        );
    }
}

export default Main;
