import { StyleSheet, Text, View } from 'react-native';

import * as InThePocketReactNativeSplash from '@inthepocket/react-native-splash';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{InThePocketReactNativeSplash.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
