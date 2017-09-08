import React, { PropTypes } from 'react';
import { Button, ListView } from 'react-native';
import User from '../Services/User';

class HomeScreen extends React.Component {
  static get navigationOptions() {
    return { title: 'Welcome' };
  }

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(User.findAll()),
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
