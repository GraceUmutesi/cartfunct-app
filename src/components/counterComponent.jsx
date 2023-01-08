import React, { Component } from 'react';

class Counter extends Component {
    state={
        value:this.props.value,
        tags:["tag1","tag2","tag3"]
    };
    //updating the state property, binding with this solution1
    //use a constructor
    // constructor(){
    //     super();
    //     this.handleIncrements=this.handleIncrements.bind(this)
    // }
    // or use handleIncrements as an arrow function
    handleIncrements=product=>{
        console.log(product)
        /*note: in react the state is not modified directly,
         that is why setState method needs to be used to sync the virtual DOM
         and the actual DOM*/
        this.setState({value:this.state.value +1})
    }
    // handleIncrements(){
    //     console.log("Increment clicked",this)
    // }
    render() {

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={()=>this.handleIncrements(this.state.value)} className="btn btn-secondary btn-sm">Increment</button>
                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </div>
        );

    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ?
            "warning" : "primary";
        return classes;
    }

    formatCount(){
        const{ value }= this.state;
        return value ===0 ? "Zero": value;
    }
}

export default Counter;