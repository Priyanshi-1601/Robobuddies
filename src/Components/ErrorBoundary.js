import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {//if error is there toggle the value of hasError
        this.setState({hasError: true})
    } 
    
    render() {
        if(this.state.hasError) {
            return <h1>Opps! Resolving issues</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;