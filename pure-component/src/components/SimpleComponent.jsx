import React,{Component} from "react";

export default class SimpleCounter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            toggle:false
        }
    }
    handleToggle=()=>{
        this.setState({
            toggle:this.state.toggle===false?true:false
        })
    }
    handleCounter=()=>{
        if(this.state.toggle){
            this.setState({
                count:this.state.count+1
            })
        }
        else{
            this.setState({
                value:this.state.value
            })
        }
    }

    render(){
        console.log("This is Simple Component")
        return(
            <div>
                <p>Simple Component</p>
                <h4>{this.state.count}</h4>
                <button onClick={this.handleToggle}>Set Toggle</button>
                <button onClick={this.handleCounter}>Counter</button>
            </div>
        )
    }
}