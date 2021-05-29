import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';

class R035_ReactstrapBadges extends Component{
    render(){
        return(
            <div>
                <h1>Product Name <Badge color="secondary">Hit</Badge></h1>
                <Button color="dark" outline>
                    Accessor <Badge color="dark">4</Badge>
                </Button>
                <Button color="danger" outline>버튼 색상테스트</Button>
                <Badge color="danger" pill>pill</Badge>
                <Badge href="http://example.com" color="light">GoLink</Badge>
            </div>
        )
    }
}

export default R035_ReactstrapBadges;