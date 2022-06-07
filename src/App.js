import { Component } from "react";
import Header from "./components/Header";
import Test from "./components/Test";

export default class App extends Component {
  render() {
    return (
      <div className="">
        <Header />
        <Test />
      </div>
    );
  }
}
