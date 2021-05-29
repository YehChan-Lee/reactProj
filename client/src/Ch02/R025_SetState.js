import React,{ Component } from 'react';

class R025_SetState extends Component{
    constructor (props){
        super(props);
        this.state = {
            StateString: 'react',
        }
    }
    StateChange = (flag) =>{
        if(flag === 'direct') this.state.StateString = '리액트';
        if(flag === 'setstate') this.setState({StateString : '리액트'});
        //setState()는 render함수를 재호출한다.
    }
    render(){
        return(
            <div style={{padding:"0px"}}>
                <button onClick = { (e) => this.StateChange('direct',e)}>state 직접변경</button>
                <button onClick = { (e) => this.StateChange('setstate',e)}>setState로 변경</button>
                [state 변경하기] StateString : {this.state.StateString}
            </div>
        )
    }
    //direct로 state를 변경하면 화면에 갱신이 안된다. 그래서 setState()를 사용해서 state를 변경해야함
}

export default R025_SetState;