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
        const { selectedDish } = this.props

        const Detail = selectedDish ?
            (<div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                    <CardBody>
                        <CardTitle>{selectedDish.name}</CardTitle>
                        <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            </div>) : null

        const Comment = selectedDish ?
            (selectedDish.comments.map((comment) => {
                return <>
                    <p>{comment.comment}</p>
                    <span>{comment.date}</span>
                    <span>{comment.author}</span>
                </>
            })) : null

        return <>
            {Detail}
            <div className="col-12 col-md-5 m-1">
                <h3>Comments</h3>
                {Comment}
            </div>
        </>





    }

}




export default DishDetail;