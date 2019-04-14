import * as React from 'react';
import {
  compose,
  lifecycle,
  pure,
  setDisplayName,
  StateHandler,
  StateHandlerMap,
  withStateHandlers,
} from 'recompose';

import Timer, { TimerProps } from 'components/Timer';

// props
interface LStateProps {
  timeLeft: number;
  timerId?: NodeJS.Timer;
}

// handler props
// Mapを使うことでpropsの合成を行う
type LStateHandlerProps = {
  reset: () => StateHandler<LStateProps>;
  tick: () => StateHandler<LStateProps>;
  setTimerId: (timerId: NodeJS.Timer) => StateHandler<LStateProps>;
} & StateHandlerMap<LStateProps>;

// SFCコンポーネントとコンテナコンポーネントのlocalStateとコンテナコンポーネントの関数を合成したinterface
type EnhancedTimerProps = TimerProps & LStateProps & LStateHandlerProps;

// 第一引数がコンポーネント内部で使用するprops
// 第二引数がコンポーネント外部に公開されるprops
const enhance = compose<EnhancedTimerProps, TimerProps>(
  setDisplayName('EnhancedTimer'),
  withStateHandlers<LStateProps, LStateHandlerProps, TimerProps>(
    props => ({
      timeLeft: props.limit,
    }),
    {
      reset: (state, props) => () => ({
        ...state,
        timeLeft: props.limit,
      }),
      tick: (state, props) => () => ({
        ...state,
        timeLeft: state.timeLeft - 1,
      }),
      setTimerId: (state, props) => (timerId: NodeJS.Timer) => ({
        ...state,
        timerId,
      }),
    },
  ),
  lifecycle<EnhancedTimerProps, {}>({
    componentDidMount() {
      const { setTimerId, tick } = this.props;
      setTimerId(setInterval(tick, 1000));
    },
    componentDidUpdate() {
      const { timeLeft, reset } = this.props;
      if (timeLeft === 0) {
        reset();
      }
    },
    componentWillUnmount() {
      const { timerId } = this.props;
      if (timerId) {
        clearInterval(timerId);
      }
    },
  }),
  pure,
);

export default enhance(Timer as React.SFC<EnhancedTimerProps>);
