import React, { Component } from 'react';
import CharacterList, { Character } from './CharacterList';
import './App.css';

class App extends Component {
  render() {
    const characters: Character[] = [
      {
        id: 1,
        name: '新垣結衣',
        age: 30,
        height: 170,
      },
      {
        id: 2,
        name: '本田翼',
        age: 26,
        height: 165,
      },
      {
        id: 3,
        name: 'Kento75',
        age: 25,
      },
    ]
    
    return (
      <div className="container">
        <header>
          <h1>メンバー一覧</h1>
        </header>
        <CharacterList school="Node学園" characters={characters}/>
      </div>
    );
  }
}

export default App;
