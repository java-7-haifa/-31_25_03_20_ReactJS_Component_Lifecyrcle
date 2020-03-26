import React from 'react';
import MyComponent from './MyComponent';

export default class extends React.Component{
    state = {
        count:0
    }

    changeCount = count => {
        this.setState({count});
    }

    render(){
        return (
            <div style={{width:'400px',margin:'100px auto', border:'1px solid black'}}>
              {this.state.count < 10 ? <MyComponent count={this.state.count} changeCount={this.changeCount} /> : <div>All done</div>}  
            </div>
        );
    }
}