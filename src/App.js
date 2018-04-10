
import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./memoryCards.json";
import "./App.css";

class App extends Component {

  state = {
    matches
  }

  render() {
    return (
      <Wrapper>
        <Title>React Memory Game</Title>

        {this.state.matches.map(match => (
          <MemoryCard 
            setClicked={this.setClick}
            id={match.id}
            key={match.id}
            name={match.name}
            image={match.image}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
