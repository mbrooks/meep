import React, { PropTypes } from 'react';
import { FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import User from '../Services/User';
import CurrentUser from '../Services/CurrentUser';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height: 50,
    padding: 10,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 20,
    color: 'grey',
  },
});

class HomeScreen extends React.Component {
  static get navigationOptions() {
    return { title: 'Contacts' };
  }

  constructor(props) {
    super(props);

    const users = User.findAll().filter(user => user.id !== CurrentUser.get().id);
    this.state = {
      users,
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <FlatList
        data={this.state.users}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          const user = item;
          return (
            <TouchableHighlight
              style={styles.container}
              onPress={() => navigate('Chat', { user })}
            >
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <View style={styles.circle} />
                </View>
                <View style={{ flex: 8 }}>
                  <Text style={styles.text}>{user.name}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.arrow}>&gt;</Text>
                </View>
              </View>
            </TouchableHighlight>
          );
        }}
      />
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
