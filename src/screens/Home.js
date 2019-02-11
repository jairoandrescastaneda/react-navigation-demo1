import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Text, Button } from 'native-base';
import { connect } from 'react-redux';
import { main } from '../assets/styles/app'

class Home extends Component {

  openDrawer = () => {
    this.props.navigation.openDrawer();
  }

  render() {
    return(
      <Container>
        <View style={[{backgroundColor: '#00cc99'}, main.panCenter]}>
          <View>
            <Text style={main.txtSection}>Home</Text>
            <Button rounded onPress={this.openDrawer}>
              <Text>Open Drawer</Text>
            </Button>
          </View>
        </View>
      </Container>
    )
  }
}

export default connect(null)(Home);
