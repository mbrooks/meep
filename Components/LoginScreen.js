import React, { PropTypes } from 'react';
import { Button, Picker, Text, View } from 'react-native';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUserId: null,
      users: this.props.users,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    if (!this.state.selectedUserId) {
      return;
    }

    const currentUser = this.state.users.find(user => user.id === this.state.selectedUserId);
    this.props.action(currentUser);
  }

  render() {
    const items = this.state.users.map(user => (
      <Picker.Item key={user.id} value={user.id} label={user.name} />
    ));

    return (
      <View>
        <Picker
          selectedValue={this.state.selectedUserId}
          onValueChange={itemValue => this.setState({ selectedUserId: itemValue })}
        >
          <Picker.Item key value label="Select User to Login" />

          {items}

        </Picker>
        <Button title="Login" onPress={this.handleLogin} />
      </View>
    );
  }
}

LoginScreen.propTypes = {
  action: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};


export default LoginScreen;
