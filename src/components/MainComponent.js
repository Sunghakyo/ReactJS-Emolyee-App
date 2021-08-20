import React, { Component } from "react";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";
import Footer from "./FooterComponent";

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

        return (<div>
            <Header />
            <Menu
                dishes={this.state.dishes}
                onClick={(dish) => { this.onDishSelect(dish) }}
                selectedDish={this.state.selectedDish}
            />
            <DishDetail
                selectedDish={this.state.selectedDish}
            />
            <Footer />
        </div>

        );
    }
}

export default Main;
