// import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ChatScreen from './ChatScreen';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Main = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Settings: { screen: SettingsScreen },
});

export default Main;
