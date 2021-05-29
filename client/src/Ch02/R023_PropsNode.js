import React,{ Component } from 'react';

class R023_PropsNode extends Component{
    render(){
        return(
            <div style={{padding:"0px"}}>
                {this.props.children} + react
            </div>
        )
    }
}

export default R023_PropsNode;