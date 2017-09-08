import React, { PropTypes } from 'react';
import { Button, ListView } from 'react-native';
import User from '../Services/User';
import CurrentUser from '../Services/CurrentUser';

class HomeScreen extends React.Component {
  static get navigationOptions() {
    return { title: 'Welcome' };
  }

  constructor(props) {
    super(props);

    const users = User.findAll().filter(user => user.id !== CurrentUser.get().id);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(users),
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={user => (
          <Button
            onPress={() => navigate('Chat', { user })}
            title={user.name}
          />
        )}
      />
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
