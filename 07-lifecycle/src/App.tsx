import React from 'react';
import { Button, Icon, Card, Statistic } from "semantic-ui-react";
import './App.css';

const LIMIT = 60;

interface AppState {
  timeLeft: number;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {timeLeft: LIMIT};
  }

  reset = () => {
    this.setState({
      timeLeft: LIMIT
    });
  }

  tick = () => {
    this.setState(prevState => ({timeLeft: prevState.timeLeft - 1}));
  }

  componentDidMount = () => {
    this.timerId = setInterval(this.tick, 1000);
  }

  componentDidUpdate = () => {
    const { timeLeft } = this.state;
    if(timeLeft === 0) {
      this.reset();
    }
  }

  componentWillUnMount =() => {
    clearInterval(this.timerId as NodeJS.Timer);
  }

  timerId ?: NodeJS.Timer;

  render() {
    const { timeLeft } = this.state;
    return (
      <div className="container">
        <header>
          <h1>タイマーサンプル</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>time</Statistic.Label>
            <Statistic.Value>{timeLeft}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <Button color="red" onClick={this.reset}>
              <Icon name="redo"/>
              Reset
            </Button>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
