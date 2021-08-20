import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';



function RenderDetail({ dish }) {
    return dish ?
        (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        ) : null
}


function RenderComment({ dish }) {
    return dish ?
        (dish.comments.map((comment) => {
            return <>
                <p>{comment.comment}</p>
                <span>{comment.date}</span>
                <span>{comment.author}</span>
            </>
        }
        )) : null

}


const DishDetail = (props) => {
    console.log(props.dish)
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDetail dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    {props.dish && <h3>Comments</h3>}
                    <RenderComment dish={props.dish} />
                </div>
            </div>
        </div>
    )

}



export default DishDetail;