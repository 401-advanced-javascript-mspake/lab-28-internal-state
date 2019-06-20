import React from 'react';


class Form extends React.Component {
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
      <form>
      <div>Name: { this.state.name } </div>
      <div># of Updates: {this.state.count } </div>
        <input type="text" onChange={this.handleChange}></input>
        <button onClick={ this.handleClick }>Submit</button>
      </form>
    );
  }
}

export default Form;
