import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Button, Text } from 'native-base';
import { main } from '../assets/styles/app'

class Notifications extends Component {
  
  openDrawer = () => {
    this.props.navigation.openDrawer();
  }

  render() {
    return(
      <Container>
        <View style={[{backgroundColor: '#ffff99'}, main.panCenter]}>
          <View>
            <Text style={main.txtSection}>Notifications</Text>
            <Button rounded onPress={this.openDrawer}>
              <Text>Notifications</Text>
            </Button>
          </View>
        </View>
      </Container>
    )
  }

}

export default Notifications;
