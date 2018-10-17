import * as React from 'react';
import CharacterList, { Character } from './CharacterList';

import './App.css';

class App extends React.Component {
  render() {
    const characters: Character[] = [
      {
        name: 'ガッキー',
        age: 30,
        height: 170,
      },
      {
        name: 'Kento75',
        age: 25,
        height: 171,
      },
      {
        name: 'test',
        age: 80,
        height: 191,
      },
    ];

    return (
      <div className="container">
        <header>
          <h1>キャラクタ一覧</h1>
          <CharacterList school="コード学園" characters={characters} />
        </header>
      </div>
    );
  }
}

export default App;
