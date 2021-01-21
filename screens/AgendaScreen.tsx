import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import CalendarioAgenda from '../components/CalendarioAgenda';

export default function Agenda() {
  return (
    <View style={styles.container}>
      <CalendarioAgenda />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
