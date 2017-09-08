import React, { PropTypes } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import Pusher from 'pusher-js/react-native';
import CurrentUser from '../Services/CurrentUser';

// Enable pusher logging - don't include this in production
// Pusher.logToConsole = true;

const pusher = new Pusher('693d5443b7b47ad439da', {
  cluster: 'us2',
  encrypted: true,
  authEndpoint: 'http://192.168.1.107:5000/pusher/auth',
});

const channel = pusher.subscribe('private-channel');

class ChatScreen extends React.Component {
  static navigationOptions({ navigation }) {
    return {
      title: `Chat with ${navigation.state.params.user.name}`,
    };
  }

  constructor(props) {
    super(props);

    const currentUser = CurrentUser.get();
    const currentUserId = currentUser.id;
    const user = props.navigation.state.params.user;
    const userId = props.navigation.state.params.user.id;
    let eventName;
    if (currentUserId < userId) {
      eventName = `client-message-${currentUserId}:${userId}`;
    } else {
      eventName = `client-message-${userId}:${currentUserId}`;
    }

    this.state = {
      currentUser,
      messages: [],
      user,
      eventName,
    };

    channel.bind(this.state.eventName, (data) => {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, data.message),
      }));
    });

    this.onSend = this.onSend.bind(this);
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
          },
          image: 'https://s3.amazonaws.com/comedy-hackathon/images/hay.jpg',
        },
        {
          _id: 2,
          createdAt: new Date(),
          user: {
            _id: 1,
          },
          image: 'https://s3.amazonaws.com/comedy-hackathon/images/hey-sexy.jpg',
        },
      ],
    });
  }

  onSend(messages = []) {
    const message = messages[0];
    channel.trigger(this.state.eventName, { message });
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, message),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        renderTime={() => false}
        renderAvatar={() => false}
        user={{
          _id: this.state.currentUser.id,
          name: this.state.currentUser.name,
        }}
      />
    );
  }
}

ChatScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ChatScreen;
