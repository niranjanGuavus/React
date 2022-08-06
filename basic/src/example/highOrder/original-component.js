import { Component } from "react";

class OriginalComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {handelClick, show} = this.props;
        return <button onClick={handelClick}>{show}</button>

    }
}

export default OriginalComponent;