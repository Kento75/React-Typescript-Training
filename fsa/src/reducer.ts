import * as action from 'actions/counter';
// fsa を使うことでpayloadが暗黙的に Actionsでのaction.hogeを指定できる
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface State {
  count: number;
}

export const initialState: State = { count: 0 };

const appReducer = reducerWithInitialState(initialState)
  .case(action.add, (state, payload) => ({
    ...state,
    count: state.count + payload.amount,
  }))
  .case(action.decrement, state => ({
    ...state,
    count: state.count - 1,
  }))
  .case(action.increment, state => ({
    ...state,
    count: state.count + 1,
  }));

export default appReducer;
