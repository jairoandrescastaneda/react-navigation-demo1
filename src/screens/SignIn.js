import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Text, Button } from 'native-base';
import { connect } from 'react-redux';
import { addAccessToken } from '../redux/actions/user';
import { main } from '../assets/styles/app'

class SignIn extends Component {

  static navigationOptions = {
    header: null
  };

  signIn = () => {
    //console.log('handle sign in');
    console.log(this.props.user)
    this.props.dispatch(addAccessToken('123456'));
    this.props.navigation.navigate('AuthLoading');
  }

  render() {
    return(
        <Container>
          <View style={[{backgroundColor: '#66ccff'}, main.panCenter]}>
            <View>
              <Button rounded onPress={this.signIn}>
                <Text>Sign In</Text>
              </Button>
          </View>
          </View>
        </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(SignIn);
