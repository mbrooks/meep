import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

class ChatScreen extends React.Component {
  static navigationOptions({ navigation }) {
    return {
      title: `Chat with ${navigation.state.params.user.name}`,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };

    this.navigationOptions = {
      title: 'Chat with lucy',
    };
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
    console.log('messages', messages);
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
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
          _id: 1,
        }}
      />
    );
  }
}

export default ChatScreen;
