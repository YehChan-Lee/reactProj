import React, { Component } from 'react';
import Swal from 'sweetalert2';

class R056_Sweetalert2Basic extends Component{
    componentDidMount(){
        //Swal.fire('1. SweetAlert')
        //alert('2. alert()')
        //Swal.fire()는 비동기로 실행된다. 동기화시켜서 사용할거면 then을 사용한다
        Swal.fire({
            title:'제목',
            text : '2초뒤에 알림이 사라집니다.',
            timer : 2000
        }).then(result => {
            alert('2. result : ' + result.value);
        })
    }
    render(){
        return(
            <h1>sweetalert2</h1>
        )
    }
}

export default R056_Sweetalert2Basic;