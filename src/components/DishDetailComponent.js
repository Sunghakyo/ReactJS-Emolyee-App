import { Component } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";


class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { selectedDish } = this.props
        return (
            (selectedDish !== null) ?
                (
                    <Card>
                        <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                        <CardBody>
                            <CardTitle>{selectedDish.name}</CardTitle>
                            <CardText>{selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                ) :
                <div></div>
        )


    }
}

export default DishDetail;
