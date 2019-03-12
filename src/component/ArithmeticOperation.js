import React from 'react';
import { connect } from 'react-redux';
class ArithmeticOperation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  valueOne = (e) => this.props.dispatch({ type: 'VALUE_ONE', value: e.target.value });
  valueTwo = (e) => this.props.dispatch({ type: 'VALUE_TWO', value: e.target.value });
  render() {
    return (
      <React.Fragment>
        <form>
          <input
            defaultValue={this.state.arithmeticOperation.valueOne}
            type="number"
            onChange={(e) => {
              this.valueOne(e);
            }}
          />
          <input
            defaultValue={this.state.arithmeticOperation.valueTwo}
            type="number"
            onChange={(e) => {
              this.valueTwo(e);
            }}
          />
        </form>
        <p>Add: {this.props.arithmeticOperation.add}</p>
        <p>Sub: {this.props.arithmeticOperation.sub}</p>
        <p>Mul: {this.props.arithmeticOperation.mul}</p>
        <p>Div: {this.props.arithmeticOperation.div}</p>
      </React.Fragment>
    );
  }
}

export default connect((state) => state)(ArithmeticOperation);
