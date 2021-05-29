import React, { PureComponent } from 'react';

class R028_PureComponentClass extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            StateString : 'react',
            StateArrayObj : ['react', {react : '200'}],
        }
    }
    buttonClick = (type) => {
        type === 'String' ? this.setState({StateString : 'react'}) : this.setState({ StateArrayObj : ['react', {react : '200'} ]});
    }
    render(){
        console.log('reder() 실행');
        return(
            <div>
                <button onClick = { e => this.buttonClick('String')}>문자열 변경</button>
                <button onClick = { e => this.buttonClick('ArrayObj')}>객체 배열 변경</button>
            </div>
        )
    }
}

export default R028_PureComponentClass;