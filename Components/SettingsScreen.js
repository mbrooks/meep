import React, { PropTypes } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  row: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  button: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: null,

    };
  }

  navigateBack() {
    const backAction = NavigationActions.back({ routeName: 'Home' });
    this.props.navigation.dispatch(backAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 100 }} />
        <Text style={styles.text}>Modes:</Text>
        <View style={styles.row}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.navigateBack()}
          >
            <Text style={styles.buttonText}>Memes</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.navigateBack()}
          >
            <Text style={styles.buttonText}>Emoji</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.navigateBack()}
          >
            <Text style={styles.buttonText}>Safe For Work</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.navigateBack()}
          >
            <Text style={styles.buttonText}>Meme Mugs</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

SettingsScreen.navigationOptions = () => {
  const options = {
    headerTitle: 'Settings',
  };
  return options;
};

SettingsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SettingsScreen;
