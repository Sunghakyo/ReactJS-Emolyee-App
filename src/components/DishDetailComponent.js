import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";

function RenderDishDetail({ selectedDish }) {
    return selectedDish ?
        (
            <Card>
                <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                <CardBody>
                    <CardTitle>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                </CardBody>
            </Card>
        ) : null
}

function RenderDishComment({ selectedDish }) {
    return selectedDish ?
        (selectedDish.comments.map((comment) =>
            <>
                <ul key={comment.id} className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>
                        <span >{comment.author}</span>
                        <span >{comment.date}</span>
                    </li>
                </ul>
            </>
        ))
        : null
}


const DishDetail = (props) => {
    const { selectedDish } = props
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDishDetail selectedDish={selectedDish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    {selectedDish && <h3>Comment</h3>}
                    <RenderDishComment selectedDish={selectedDish} />
                </div>
            </div>
        </div>
    );

}

export default DishDetail;
