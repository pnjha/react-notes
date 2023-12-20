import React from "react";

export default class MemberClass extends React.Component {
  constructor(options) {
    super(options);
    this.name = options.name;
    this.location = options.location;
    this.state = { count: 0, user_info: {} };
    // console.log(`MemberClass ${this.name} constructor`);
  }
  async componentDidMount() {
    // console.log(`MemberClass ${this.name} componentDidMount`);
    const res = await fetch("https://api.github.com/users/pnjha");
    const json = await res.json();
    this.setState({
      user_info: json
    });
  }
  componentDidUpdate() {
    // console.log(`MemberClass ${this.name} componentDidUpdate`);
  }
  render() {
    // this.forceUpdate(); // dangerous
    // console.log(`MemberClass ${this.name} render`);
    // debugger;
    return (
      <button
        className="member-card"
        onMouseOver={() => {
          this.setState({
            count: this.state.count + 1
          });
        }}
      >
        <img className="user-image" src={`${this.state.user_info.avatar_url}`} alt="user image"></img>
        <h3>Name: {this.state.user_info.name}</h3>
        <h3>Location: {this.state.user_info.location}</h3>
        <h3>Company: {this.state.user_info.company}</h3>
        <h3>Count: {this.state.count}</h3>
      </button>
    );
  }
}

/**
 * About constructor
About.js:15 About render
MemberClass.js:9 MemberClass Prakash constructor
MemberClass.js:15 MemberClass Prakash render
MemberClass.js:9 MemberClass Jha constructor
MemberClass.js:15 MemberClass Jha render
MemberClass.js:12 MemberClass Prakash componentDidMount
MemberClass.js:12 MemberClass Jha componentDidMount
About.js:12 About componentDidMount
Header.js:16
 */
