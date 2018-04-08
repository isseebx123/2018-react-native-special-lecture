import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import TopBar from './components/TopBar';
import CoinView from './components/CoinView';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden={true} barStyle="light-content" />
      <TopBar title="im title"/>
      <CoinView style={styles.coinView}></CoinView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  coinView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'skyblue',
    alignItems: 'center',
    // justifyContent: 'space-around',
  }
});
