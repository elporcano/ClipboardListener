import React from 'react';
import { StyleSheet, Text, View, Button, Clipboard, TextInput, AppState } from 'react-native';
import AppStateListener from 'react-native-appstate-listener';
import BackgroundTask from 'react-native-background-task';


    BackgroundTask.define(() => {
      console.log('Hello from a background task')
      BackgroundTask.finish()
    })

export default class App extends React.Component {

    constructor(props) 
    {
      super(props);

      this.state = {
        clipboardContent: '',
        appState: AppState.currentState

      };    
    }



    readFromClipboard = async () => 
    {   
      const clipboardContent = await Clipboard.getString();   
      this.setState({ clipboardContent }); 
      console.log('Read Clipboard');
      console.log(this.state.clipboardContent);
    };

    componentDidMount() {
      BackgroundTask.schedule()
    }
    

    // componentDidMount() {
    //   this._interval = setInterval(() => {
    //     this.readFromClipboard();
    //     console.log('x')
    //   }, 1000);
    // }

    // componentWillUnmount() {
    //   clearInterval(this._interval);
    // }

    handleInactive() {
      console.log("The application is now inactive!");
    }

    handleActive() {
      console.log("The application is now active!");
    }

    handleBackground() {
      console.log("The application is now in the background!"); 
    }


  render() {
    return (
      <View style={styles.container}>
        <Text>Clipboard Contents: </Text>
        <Text>{this.state.clipboardContent}</Text>

        <AppStateListener
          onActive={this.handleActive}
          onBackground={this.handleBackground}
          onInactive={this.handleInactive}
        />

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
