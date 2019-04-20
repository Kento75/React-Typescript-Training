import React, {FC} from 'react';
import { Card, Button, Icon, Statistic } from "semantic-ui-react";

interface AppProps {
  timeLeft: number;
  reset: () => void;
}

const AppComponent: FC<AppProps> = ({timeLeft, reset}) => {
  return (
    <div className="container">
      <header>
        <h1>タイマー</h1>
      </header>
      <Card>
        <Statistic className="number-board">
          <Statistic.Label>time</Statistic.Label>
          <Statistic.Value>{timeLeft}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <Button color="red" fluid onClick={reset}>
            <Icon name="redo" />
            Reset
          </Button>
        </Card.Content>
      </Card>
    </div>
  )
}

export default AppComponent;
