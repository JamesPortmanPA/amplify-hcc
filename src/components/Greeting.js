import React, {Component, Fragment} from 'react';

class Greeting extends Component {

    state = {
        username: "",
        isLoggedIn: true,
        count: 0
    }

    handleClick = () => {
        this.setState((state, props) => ({
            count: state.count + 1
        }));
    }

    componentDidMount(){
        this.setState((state, props) =>({
            username: "James"
        }));
    }

    render(){
        if (this.state.isLoggedIn){
            return (
                <Fragment>
                    <h1>Hello {this.state.username}</h1>
                    <p>You have visited this site {this.state.count} times.</p>
                    <button onClick={this.handleClick}>Click me</button>
                </Fragment>
            );
        }else{
            return <p>Please login</p>
        }
    }
}

/*
const Greeting = (props) => {
    return <h1>Hello World {props.name}</h1>;
}
*/

export default Greeting;