import React from 'react'
import { List,Text } from 'react-native-paper';

export default function Payment() {
    return (
        <List.Section >
            <List.Accordion
              title="How can i be sure that i will be paid? "
              left={props => <List.Icon {...props} icon="folder" />}>
              <List.Item title="First item" />
             <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </List.Accordion>
            <List.Accordion
              title="What`s the payment process?"
              left={props => <List.Icon {...props} icon="folder" />}>
              <List.Item title="First item" />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </List.Accordion>
            <List.Accordion
              title="Is my income at insense being taxed?"
              left={props => <List.Icon {...props} icon="folder" />}>
              <List.Item title="First item" />
           <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </List.Accordion>
        </List.Section>
      )
}
