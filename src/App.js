
import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import CardContainer from "./components/CardContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import matches from "./memoryCards.json";
import "./App.css";

let correct = 0;
let bestScore = 0;
let message = "Click any image to begin.";

class App extends Component {

  state = {
    matches,
    correct,
    bestScore,
    message
  }

  setClicked = id => {

    //Filter for clicked match
    const clickMatch = this.state.matches.filter(match => match.id === id);

    //if image clicked is already true, start over
    if (clickMatch[0].clicked) {
      correct = 0;
      message = "You clicked that image. Try Again";

      // set all clicked images to false
      for (let i = 0; i < matches.length; i++) {
        matches[i].clicked = false;
      }

      this.setState({correct});
      this.setState({matches});
      this.setState({message});

      // if image clicked = false
    } else if (correct < 11) {  //TODO - change 11 to dynamic variable of cards

      clickMatch[0].clicked = true;
      correct++;
      message = "Correct";

      if (correct > bestScore) {
        bestScore = correct;
        this.setState({bestScore});
      }

      //shuffle cards
      matches.sort( (a,b) => 0.5 - Math.random());

      this.setState({matches});
      this.setState({correct});
      this.setState({message});
      
    } else {

      clickMatch[0].clicked = true;
      correct = 0;
      message = "You win, Try again? Or are you a chicken? Caca Caca Caw";

      for (let i = 0 ; i < matches.length ; i++) {
        matches[i].clicked = false;
      }

      //shuffle cards
      matches.sort( (a,b) => 0.5 - Math.random());

      this.setState({matches});
      this.setState({correct});
      this.setState({message});

    }

  }

  render() {
    return ( 
      <Wrapper>
        <Navbar>
          <ul>
            <li className="title">
              <a href="/">Reacted <span className="block">Development</span></a>
            </li>
            <li className="status-message">{this.state.message}</li>
            <li className="score-summary">Correct Guesses: {this.state.correct} <span className="block"> Best Score: {this.state.bestScore}</span></li>
          </ul>
        </Navbar>
        <CardContainer>
        <Header/>
          {this.state.matches.map(match => (
            <MemoryCard 
              setClicked={this.setClicked}
              id={match.id}
              key={match.id}
              name={match.name}
              image={match.image}
            />
          ))}
        </CardContainer>
        <Footer/>
      </Wrapper>
    );
  }
}

export default App;
