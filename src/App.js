
import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./memoryCards.json";
import "./App.css";

let correct = 0;
let bestScore = 0;

class App extends Component {

  state = {
    matches,
    correct,
    bestScore
  }

  setClicked = id => {

    //Filter for clicked match
    const clickMatch = this.state.matches.filter(match => match.id === id);

    //if image clicked is already true, start over
    if (clickMatch[0].clicked) {
      correct = 0;

      for (let i = 0; i < matches.length; i++) {
        matches[i].clicked = false;
      }

      this.setState({correct});
      this.setState({matches});

      // if image clicked = false
    } else if (correct < 11) {  //TODO - change 11 to dynamic variable of cards

      clickMatch[0].clicked = true;
      correct++;

      if (correct > bestScore) {
        bestScore = correct;
        this.setState({bestScore});
      }

      //shuffle cards
      matches.sort( (a,b) => 0.5 - Math.random());

      this.setState({matches});
      this.setState({correct});
      
    } else {

      clickMatch[0].clicked = true;
      correct = 0;

      for (let i = 0 ; i < matches.length ; i++) {
        matches[i].clicked = false;
      }

      //shuffle cards
      matches.sort( (a,b) => 0.5 - Math.random());

      this.setState({matches});
      this.setState({correct});

    }

  }

  render() {
    return (
      <Wrapper>
        <Title>React Memory Game</Title>
        
        <h3 className="scoreSummary">
            Correct Guesses: {this.state.correct} 
            <br />
            Best Score: {this.state.bestScore} 
        </h3>

        {this.state.matches.map(match => (
          <MemoryCard 
            setClicked={this.setClicked}
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
