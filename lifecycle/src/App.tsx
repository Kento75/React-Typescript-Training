import * as React from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';

import './App.css';

const LIMIT = 60;

interface AppState {
  timeLeft: number;
}

class App extends React.Component<{}, AppState> {
  timerId: NodeJS.Timer;

  constructor(props: {}) {
    super(props);
    // 初期値設定
    this.state = { timeLeft: LIMIT };
  }

  // 時間をリセットする関数
  reset = () => this.setState({ timeLeft: LIMIT });

  tick = () => {
    this.setState({ timeLeft: this.state.timeLeft - 1 });
  };

  // 毎秒１減算する
  componentDidMount = () => {
    this.timerId = setInterval(this.tick, 1000);
  };

  // 毎秒の減算ごとにアップデートが走るため、
  // 毎回０になっていないかチェックが走る
  // ０だったら値をりせっとする
  componentDidUpdate = () => {
    if (this.state.timeLeft === 0) {
      this.reset();
    }
  };

  // アンマウント前にプロセスを止める
  componentWillUnmount = () => {
    clearInterval(this.timerId);
  };

  render() {
    return (
      <div className="container">
        <header>
          <h1>タイマー</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>time</Statistic.Label>
            <Statistic.Value>{this.state.timeLeft}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <Button color="red" fluid={true} onClick={this.reset}>
              <Icon name="redo" />
              Reset
            </Button>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
