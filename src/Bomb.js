// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component{

    constructor(props){
        console.log(props.initialCount)
        super()
        this.state = {secondsLeft: props.initialCount}
    }
    render(){
        if(this.state.secondsLeft == 0){
            return 'Boom!'
        }else{
        return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }
    

}
