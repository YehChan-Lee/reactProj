import React, { Component } from 'react';

class R033_ReturnMap extends Component{
    
    render(){
        const Element_Array = [
            <li>react</li>,
            <li>200</li>,
            <li>Array map</li>
        ]
        return(
            <ul>
                {Element_Array.map( (array_val) => array_val)}
            </ul>
        )
    }

}

export default R033_ReturnMap;