import React from 'react';
import MainScreen from './Components/MainScreen';
import LoginScreen from './Components/LoginScreen';
import User from './Services/User';
import CurrentUser from './Services/CurrentUser';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      users: User.findAll(),
    };

    this.setCurrentUser = this.setCurrentUser.bind(this);
  }

  setCurrentUser(currentUser) {
    CurrentUser.set(currentUser);
    this.setState({ currentUser });
  }

  render() {
    if (!this.state.currentUser) {
      return <LoginScreen users={this.state.users} action={this.setCurrentUser} />;
    }
    return <MainScreen currentUser={this.state.currentUser} />;
  }
}

export default App;
