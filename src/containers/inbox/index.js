import React from 'react'
import {
  PureComponent,
  Text,
  View
} from 'react-native-mdcore'

export default class Inbox extends PureComponent {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
          subType="hint"
          type="display1"
          value="INBOX" />
      </View>
    )
  }

  // render() {
  //   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <Text
  //         subType="hint"
  //         type="display1"
  //         value="HACKED" />
  //     </View>
  //   )
  // }
}
