import { View, Text } from 'react-native'
import * as React from 'react';
import { WebView } from 'react-native-webview';

const WebViews = () => {
  return (
    <View>
        <WebView 
            style={{marginTop: 25}}
            source={{ uri: 'https://expo.dev' }}
        />
    </View>
  )
}

export default WebViews