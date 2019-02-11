import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Text, Button } from 'native-base';
import { main } from '../assets/styles/app'

class Rewards extends Component {

  openDrawer = () => {
    this.props.navigation.openDrawer();
  }

  render() {
    return(
      <Container>
        <View style={[{backgroundColor: '#00cc99'}, main.panCenter]}>
          <View>
            <Text style={main.txtSection}>Rewards</Text>
            <Button rounded onPress={this.openDrawer}>
              <Text>Open Drawer</Text>
            </Button>
          </View>
        </View>
      </Container>
    )
  }

}

export default Rewards;
