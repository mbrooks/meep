import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

let nsfwModeData = false;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8DC',
  },
  text: {
    fontSize: 30,
  },
});


class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nsfwMode: nsfwModeData,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>NSFW Mode</Text>
        <Switch
          onValueChange={(nsfwMode) => {
            nsfwModeData = nsfwMode;
            this.setState({ nsfwMode });
          }}
          value={this.state.nsfwMode}
        />
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

export default SettingsScreen;
