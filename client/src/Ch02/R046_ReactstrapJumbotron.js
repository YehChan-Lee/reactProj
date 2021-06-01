import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class R046_ReactstrapJumbotron extends Component{
    render(){
        return(
            <>
                <Jumbotron style={{backgroundColor : "#d38c7c"}}>
                    <h1 className = "display-4">REACT 200!</h1>
                    <p className="h4">Contrary to popular belief,
                    Lorem Ipsum is not simply random text.</p>
                    <hr className="my-2"/>
                    <p>there are many variations of passages of Lorem Ipsum available.</p>
                    <p className="lead">
                        <Button color="danger">Go Detail</Button>
                    </p>
                </Jumbotron>
            </>
        )
    }
}

export default R046_ReactstrapJumbotron;