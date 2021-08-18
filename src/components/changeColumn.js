import React from 'react';

class ChangeColumn extends React.Component {
    render() {
        const { OnChangeColumn } = this.props;


        return (
            (OnChangeColumn === true) ?
                <div></div> :
                <div className="d-flex justify-content-center ">
                    <button className="btn-change" onClick={() => { this.props.onClickChange(true) }}>Đổi Giao Diện 4 Cột</button>
                </div>

        )
    }
}

export default ChangeColumn;