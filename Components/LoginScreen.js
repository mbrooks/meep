import React, { PropTypes } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    color: '#3C43D9',
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: '#3C43D9',
    borderWidth: 1,
    backgroundColor: 'white',
    color: '#3C43D9',
  },
  button: {
    width: 300,
    height: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#3C43D9',
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
      attempts: 0,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    if (this.state.attempts === 0) {
      alert('Password Invalid'); //eslint-disable-line
      this.setState({ attempts: this.state.attempts + 1 });
      return;
    }

    if (!this.state.password) {
      return;
    }

    const currentUser = this.state.users.find(user =>
      user.name.toLowerCase() === this.state.username.toLowerCase());

    if (!currentUser) {
      return;
    }

    this.props.action(currentUser);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 10, width: 100 }} />
        <View>
          <Image
            resizeMode={'contain'}
            style={{ width: 275, height: 275 }}
            source={{ uri: 'https://s3.amazonaws.com/comedy-hackathon/images/meepLogo.jpg' }}
          />
        </View>
        <View>
          <View>
            <Text style={styles.text}>Username:</Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
              autoCorrect={false}
            />
          </View>
          <View>
            <Text style={styles.text}>Password:</Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              autoCorrect={false}
            />
          </View>
          <View>
            <TouchableHighlight
              style={styles.button}
              onPress={() => this.handleLogin()}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
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
