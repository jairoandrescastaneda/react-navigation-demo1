import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Button, Text } from 'native-base';
import { main } from '../assets/styles/app'

class Geolocation extends Component {
  
  openDrawer = () => {
    this.props.navigation.openDrawer();
  }

  render() {
    return(
      <Container>
        <View style={[{backgroundColor: '#ffff99'}, main.panCenter]}>
          <View>
            <Text style={main.txtSection}>Geolocation</Text>
            <Button rounded onPress={this.openDrawer}>
              <Text>Open Drawer</Text>
            </Button>
          </View>
        </View>
      </Container>
    )
  }

}

export default Geolocation;
