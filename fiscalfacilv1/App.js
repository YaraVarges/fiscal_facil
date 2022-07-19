import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { StatusBar } from 'expo-status-bar';

//import Home from './src/screens/home/index';
import Feeds from './src/screens/details/index';
import AboutNCM from './src/screens/about/NCM/index';
import AboutCST from './src/screens/about/CST/index';
import AboutCEST from './src/screens/about/CEST/index';
import AboutCFOP from './src/screens/about/CFOP/index';


const Navegador = createStackNavigator(
  {
    Feeds: { screen: Feeds },
    AboutNCM: { screen: AboutNCM },
    AboutCST: { screen: AboutCST },
    AboutCEST: { screen: AboutCEST },
    AboutCFOP: { screen: AboutCFOP }
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(Navegador);

export default class App extends React.Component {
  render() {
    return <AppContainer></AppContainer>;
  }
}