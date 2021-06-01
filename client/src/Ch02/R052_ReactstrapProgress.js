import React, { Component } from 'react';
import { Progress } from 'reactstrap';

class R052_ReactstrapProgress extends Component{
    constructor(props){
        super(props);
        this.state = { progress : 0}
    }

    componentDidMount(){
        this.progress()
    }
    progress = () =>{
        if(this.state.progress != 100){
            setTimeout(function(){
                this.setState({progress : this.state.progress+1});
                this.progress();
            }.bind(this),100);
        }
    }

    render(){
        return(
            <>
                <Progress color="info" value={this.state.progress}>
                    {this.state.progress}%
                </Progress><br/>
                <Progress multi>
                    <Progress bar color="warning" value="25">25%</Progress>
                    <Progress bar color="success" value="35">WoW!</Progress>
                    <Progress bar value="15">Meh</Progress>
                    <Progress bar color="danger" value="25">Look Out!!</Progress>
                </Progress>
            </>
        )
    }
}

export default R052_ReactstrapProgress;