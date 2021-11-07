import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {clicks:0};
    this.click = this.click.bind(this);
  }

  render(){
    return (
      
      <div className="ClickContainer">
        
        <p> You clicked {this.state.clicks} times </p>
         <button className="Button" onClick={this.click}>Click </button>
         
      </div>
      
    );
  }

  click(){
    this.setState({
      clicks: this.state.clicks + 1,
    });
  }
  
}

export default App;
