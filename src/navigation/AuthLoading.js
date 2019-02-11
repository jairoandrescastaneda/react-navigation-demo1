import React, { Component } from 'react';
import { ActivityIndicator, StatusBar,View } from 'react-native';
import { connect } from 'react-redux';

class AuthLoading extends Component {

  render() {
    return (
      <View style={{ backgroundColor: 'yellow', flex: 1, alignContent: 'center', justifyContent: 'center', }}>
        <View>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      </View>
    );
  }

  componentDidMount() {
    console.log(this.props.user);
    console.log('A');
    const stack = (this.props.user.accessToken !== '') ? 'AppStack' : 'AuthStack'
    this.props.navigation.navigate(stack);
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AuthLoading);
