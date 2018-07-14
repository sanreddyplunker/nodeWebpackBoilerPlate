import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={value:''};
  }
  callNode(){
    fetch("http://192.168.31.184:3000/getNode")
    .then(res=>res.json())
    .then((res) => {
      console.log("hiii "+res.message);
      this.setState({value:res.message})
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=>this.callNode()}>Open up App.js to start working on your app!</Text>
        <Text>value {this.state.value}</Text>
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
