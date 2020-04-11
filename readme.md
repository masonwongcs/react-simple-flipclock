# react-simple-marquee

A very simple Flip Clock component created by using CSS animation and React

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

```
npm i react-simple-flipclock --save
```

## Usage

Import Flip Clock component into your React component

```
import * as React from "react";
import ReactDOM from "react-dom";
import Flipclock from "react-simple-marquee";

class App extends React.Component {
  render() {
    return (
      <Flipclock
        speed={2} // Speed of the marquee (Optional)
        style={{
          height: 30 // Your own styling (Optional)
        }}
      >
        Your text here
      </Flipclock>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

```
