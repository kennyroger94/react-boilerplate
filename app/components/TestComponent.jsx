import React from 'react';

class TestComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {count : 0};
    this.add = this.add.bind(this);
  }

  add () {
    let newCount = this.state.count + 1;
    this.setState({count: newCount});
  }

  render() {
    return (
      <div>
        <button onClick={this.add}>Button</button>
        TestComponent count: {this.state.count}
      </div>
    );
  }
}

export default TestComponent;