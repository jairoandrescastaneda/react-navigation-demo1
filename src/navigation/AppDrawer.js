import React, { Component } from 'react';
import { Text, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { DrawerItems } from 'react-navigation';
import { connect } from 'react-redux';

class AppDrawer extends Component {

  logout = () => {
    Alert.alert(
      'Logout',
      'Are you sure to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => { }, style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: () => {
            this.props.dispatch({
              type: 'LOGOUT'
            });
            this.props.navigation.navigate('AuthLoading');
          }
        },
      ],
      { cancelable: false }
    )
  };

  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <DrawerItems {...this.props} />
          <TouchableOpacity onPress={this.logout}>
            <Text style={{margin: 16, fontWeight: 'bold'}}>Logout</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    )
  }
}

export default connect(null)(AppDrawer);
