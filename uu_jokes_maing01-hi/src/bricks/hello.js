//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
import AnotherJoke from "./another_joke";
import Joke from "./joke";
//@@viewOff:imports


const Welcome = createComponent({
  render(props) {
    return <h1>Hello, {props.name}</h1>;
  }
});

const Counter = createComponent({
  render() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
});

const DoubleCounter = createComponent({
  render() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(20);

    return (
      <div>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
      </div>
    );
  }
});

export default {
  DoubleCounter,
  Counter,
  Welcome
}
