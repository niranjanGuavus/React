import { Component } from 'react';

class ComponentLifeCycle extends Component {
    constructor(){
        super()
        this.state = {count:0};
    }

    /**
     * React mounting phase 
     * [componentWillMount --> Render --> componentDidMount]
     * Note: componentWillMount is deprecated in 18 onwards rename as UNSAFE_componentWillMount
     * 
     * React Updating Phase
     * [componentWillReceiveProps(called when component receive props) --> 
     *  shouldComponentUpdate(decide whether the next component's state should trigger a re-renderer or not)] --->
     * componentWillUpdate(is invoked before rendering) --->
     * componentDidUpdate (is called after react update DOM)
     **/

    componentWillMount(){// UNSAFE_componentWillMount
        console.log("lifecycle: componentWillMount");
    }


    componentDidMount(){
        console.log("lifecycle: componentDidMount");
        
    }


    componentDidUpdate() {
        console.log("component update")
    }

    onButtonClick() {
        this.setState((state,props) => ({count: state.count+1}));// best practice
        // OR
        //this.setState({count: this.state.count+1});
    }



    render(){
        console.log("lifecycle: render");
        return (
            <div>
                No of Click: {this.state.count}
                <br></br>
                <button onClick={()=>this.onButtonClick()}>click me</button>
            </div>
        )
    }
}
export default ComponentLifeCycle;