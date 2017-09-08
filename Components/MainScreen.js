// import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ChatScreen from './ChatScreen';
import HomeScreen from './HomeScreen';

const Main = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

export default Main;
