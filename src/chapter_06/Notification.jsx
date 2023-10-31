import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
    backgroundColor: "#FFFFE9",
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
};

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(`${this.props.id} componentDidMount() called`);
  }

  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdate() called`);
  }
  componentWillUnmount() {
    console.log(`${this.props.id} componentWillUnmount() called`);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <img alt="" src={this.props.imgSrc} style={styles.image}></img>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}

export default Notification;
