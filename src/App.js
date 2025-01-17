import React, {Component} from 'react';

class APP extends Component{

    state ={
       name:"ali",
       count:0
    }

    changecount=()=> {this.setState({count:this.state.count+1})}
    render(){
        return(
          <React.Fragment>
        <h1>shopping cart</h1>
        
        <button onClick={this.changecount()}>add</button>
        <div> {this.state.count}</div>
        </React.Fragment>
        );
    }
}

export default APP;