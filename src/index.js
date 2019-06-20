import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: '',
    };
  }

  handleChange = (event) => {
    const name = event.target.value;
    this.setState({ name });
  }

  handleClick = (event) => {
    event.preventDefault();
    const count = this.state.count + 1;
    this.setState({ count });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div>Name: { this.state.name } </div>
          <div># of Updates: {this.state.count } </div>
          <form>
            <input type="text" onChange={this.handleChange}></input>
            <button onClick={ this.handleClick }>Submit</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
