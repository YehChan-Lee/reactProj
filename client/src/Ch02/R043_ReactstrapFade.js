import React, { Component } from 'react';
import { Fade, Button } from 'reactstrap';

class R043_ReactstrapFade extends Component{
    constructor(props){
        super(props);
        this.state = { fadeInOut : false }  
    }
    toggle = (e) => {
        this.setState({ fadeInOut :  !this.state.fadeInOut })
    }
    render(){
        return(
            <div>
                <Button color="success" onClick = { this.toggle }>Fade In/Out</Button>
                <Fade in = {this.state.fadeInOut} tag="h1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </Fade>
            </div>

        )
    }
}

export default R043_ReactstrapFade;