import React from "react";
import Member from "./Member";
import MemberClass from "./MemberClass";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("About constructor");
  }
  // used to make an api call since this is called after render method
  componentDidMount() {
    // console.log("About componentDidMount");
  }
  render() {
    // console.log("About render");
    return (
      <div>
        <h1>About me</h1>
        <Member name="Prakash" />
        <MemberClass name="Prakash" location="Bangalore" />
        {/* <MemberClass name="Jha" location="Bangalore" /> */}
        {/* {new MemberClass({ name: "Prakash", location: "Bangalore" }).render()} */}
      </div>
    );
  }
}
