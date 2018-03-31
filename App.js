import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";
import Router from "./src/Router";

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyA8TCmaQ5ZcuO-DyiaCmPCzb0kBdGMkHGU",
      authDomain: "manager-zerojet.firebaseapp.com",
      databaseURL: "https://manager-zerojet.firebaseio.com",
      projectId: "manager-zerojet",
      storageBucket: "manager-zerojet.appspot.com",
      messagingSenderId: "490144937928"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
