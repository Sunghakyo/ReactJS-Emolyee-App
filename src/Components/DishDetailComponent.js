import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';



class DishDetail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { dish } = this.props

        const Detail = dish ?
            (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            ) : null

        const Comment = dish ?
            (dish.comments.map((comment) => {
                return <>
                    <p>{comment.comment}</p>
                    <span>{comment.date}</span>
                    <span>{comment.author}</span>
                </>
            })) : null

        return <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {Detail}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {dish && <h3>Comments</h3>}
                        {Comment}
                    </div>
                </div>

            </div>
        </>

    }

}


export default DishDetail;