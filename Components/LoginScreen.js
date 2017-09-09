import React, { PropTypes } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8DC',
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
  },
});

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUserId: null,
      users: this.props.users,
      username: '',
      password: '',
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    if (!this.state.password) {
      return;
    }

    const currentUser = this.state.users.find(user => user.name === this.state.username);

    if (!currentUser) {
      return;
    }

    this.props.action(currentUser);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            resizeMode={'contain'}
            style={{ width: 200, height: 200 }}
            source={{ uri: 'https://s3.amazonaws.com/comedy-hackathon/images/meepLogo.jpg' }}
          />
        </View>
        <View>
          <View>
            <Text>Username:</Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
          </View>
          <View>
            <Text>Password:</Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              onChangeText={password => this.setState({ password })}
              secureTextEntry
              value={this.state.password}
            />
          </View>
          <View>
            <Button title="Login" onPress={this.handleLogin} />
          </View>
        </View>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  action: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};


export default LoginScreen;
