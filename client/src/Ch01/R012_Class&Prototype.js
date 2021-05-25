import React, { Component } from 'react';

class ClassPrototype extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        //ES5 ProtoType
        var ExamCountFunc = function(){
            function ExamCount(num,tmp){
                this.number = num;
                this.tmp = tmp;
            }
            ExamCount.prototype.showNum = function(){
                console.log('1.react_'+ this.number);
                console.log('2.test : ' + this.tmp);
            };
            return ExamCount;
        }();

        var cnt = new ExamCountFunc('200','test');
        cnt.showNum();

        //ES6 Class
        class ExamCountClass{
            constructor(num2){
                this.number2 = num2;
            }
            showNum(){
                console.log(`2.react_${this.number2}`);
            }
        }
        var cnt2 = new ExamCountClass('2hundred');
        cnt2.showNum();
    }
    render(){
        return(
            <h2>[ This is Class ]</h2>
        )
    }
}
export default ClassPrototype;