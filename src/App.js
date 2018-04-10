
import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import matches from "./memoryCards.json";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>React Memory Game</Title>

        <MemoryCard>

        </MemoryCard>

      </Wrapper>
    );
  }
}

export default App;
