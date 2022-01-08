import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

//Components
// Functional and Class

//JSON - Format
// {key:value, key:value, key:value}

//Props - Pass values from one component to another
//States - Store values inside a class/component

//Component Lifecycle
//Mounting
//Updating
//Unmounting

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Jasmeen",
      email: "abc@gmail.com",
    };
  }
  componentDidMount() {
    this.setState({ name: "Khan", email: "xyz@gmail.com" });
  }
  render() {
    //JSX - Javascript and XML
    return (
      <View style={{flex:1}}>
        <ImageBackground source={require('./assets/bg.png')} style={{width:'100%', height:'100%'}}>
        <Text
          style={{
            color: "blue",
            marginTop: 50,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Hello There!
        </Text>
        <Text>{this.state.name}</Text>
        <Text>{this.state.email}</Text> 
        <Text>Hello There!</Text>
        <Text>Hello There!</Text>
        <Image
          source={require("./assets/logo.png")}
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
            borderRadius: 20,
          }}
        />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
