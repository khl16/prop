import React from "react";


class PersonCard extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
            <h1>{ this.props.firstName } { this.props.lastName }  </h1>
            <div></div>
            <div>{this.props.age}</div>
            <div> {this.props.colorhir}</div>
            </>
        )
    }
}

export default PersonCard;