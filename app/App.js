import React, { Component } from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';

import RecordScreen from './screens/RecordScreen';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" component={RecordScreen} title="RecordScreen"/>
  </Scene>
);

class App extends React.Component {
  render() {
    return <Router scenes={scenes}/>
  }
}

export default App;