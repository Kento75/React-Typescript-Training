import * as React from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';
import { Character } from './CharacterList';

export interface Character {
  name: string;
  age: number;
  height?: number;
}

interface CharacterListProps {
  school: string;
  characters: Character[];
}

class CharacterList extends React.Component<CharacterListProps> {
  render() {
    const { school, characters } = this.props;

    return (
      <>
        <Header as="h2">{school}</Header>
        <Item.Group>
          {characters.map((c, i) => (
            <Item key={i}>
              <Icon name="user circle" size="huge" />
              <Item.Content>
                <Item.Header>{c.name}</Item.Header>
                <Item.Meta>{c.age} 歳</Item.Meta>
                <Item.Meta>{c.height ? c.height : '???'} cm</Item.Meta>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </>
    );
  }
}

export default CharacterList;
