import React, { Component } from 'react';

class R032_Fragments extends Component{
    render(){
        return(
            //JSX에서 element를 하나의 태그로 감싸지 않으면 에러가 발생한다.
            <React.Fragment>
                <p>P Tag</p>
                <span>Span Tag</span>
            </React.Fragment>
        )
    }
}

export default R032_Fragments;