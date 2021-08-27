import React, { Component } from "react";
import Home from './HomeComponent';
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import DishDetail from './DishDetailComponent';
import Contact from './ContactComponent';
import About from './AboutUsComponent'
import Footer from "./FooterComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { addComment } from '../redux/ActionCreator';


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}


const mapDishPartToProps = (dispatch) => ({
    addComment: (disId, rating, author, comment) => dispatch(addComment(disId, rating, author, comment))
});

class Main extends Component {



    render() {
        const DishWithId = ({ match }) => {
            console.log(match.params.dishId)
            return (
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    addComment={this.props.addComment}
                />

            );





        };
        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
            )
        }
        return (<div>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route exact path='/contactus' component={Contact} />
                <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>

        );
    }
}

export default withRouter(connect(mapStateToProps, mapDishPartToProps)(Main));
