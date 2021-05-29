import React, { Component } from 'react';
import datatype from 'prop-types';

class R021_PropsRequired extends Component{
    render(){
        let{
            ReactNumber,ReactString
        } = this.props;
        return(
            <div style={{padding:"0px"}}>
                {ReactString}{ReactNumber}
            </div>
        )
    }
}

R021_PropsRequired.propTypes = {
    ReactString : datatype.isRequired,
}

export default R021_PropsRequired;