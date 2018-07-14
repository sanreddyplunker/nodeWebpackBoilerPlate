import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  callNode(){
    fetch("http://localhost:3000/getNode")
    .then(res => console.log("hiii "+res))
    .catch(err => console.log(err))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=>this.callNode()}>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
