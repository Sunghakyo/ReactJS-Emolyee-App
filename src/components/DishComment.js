import React from 'react';

class DishComments extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const divComment = this.props.selectedDish !== null ?

            this.props.selectedDish.comments.map((comment) => {
                return (
                    <>
                        <ul class="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>
                                <p >{comment.author}</p>
                                <p >{comment.date}</p>
                            </li>
                        </ul>
                    </>
                )
            }
            ) : null


        return (
            <div className="col-12 col-md-5 m-1">
                {divComment && (<h4 >Comments</h4>)}
                {divComment}
            </div>
        )

    }
}


export default DishComments;