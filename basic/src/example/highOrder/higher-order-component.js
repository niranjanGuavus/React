import React, { Component } from 'react';

const EnhancedComponent = (OrgComp) => {

    class NewComponent extends Component {

        constructor(props) {
            super(props);
            this.state = {count:0};
        }

        onClickHandler() {
            this.setState({count: this.state.count+1}); //increment the count
        }

        render() {
            return(
                <OrgComp show={this.state.count} handelClick={()=> this.onClickHandler()}>ello
                </OrgComp>
            )
        }

    }

    return NewComponent;
}

export default EnhancedComponent;
