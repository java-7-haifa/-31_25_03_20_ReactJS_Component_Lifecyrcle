import React from "react";

export default class extends React.Component {
  state = {
    title: "hello"
  };

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  /*deprecated */
  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(json => this.setState({ ...this.state, todos: json }));
    }, 5000);
  }

  /* Updating */
  /* deprecated */
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps", nextProps, nextState);
    return nextState;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    return prevState;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  getTodo = () => {
    return (
      <>
        <p>{this.state.todos.title}</p>
      </>
    );
  };
  render() {
    console.log("render");

    return (
      <div>
        <h3>{this.state.title}</h3>
        <p style={{ textAlign: "center" }}>{this.props.count}</p>
        <button onClick={() => this.props.changeCount(this.props.count + 1)}>
          change
        </button>
        {this.state.todos ? this.getTodo() : null}
      </div>
    );
  }
}
