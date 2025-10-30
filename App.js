import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import { SquareText } from './Component1.js';
import { BottomPart} from './Component2.js'

export default function App() {
  useEffect(() => {
    console.log("Los componentes se han renderizado.");
  });
  return (
    <View style={styles.container}>
      <SquareText backgroundC='#ff46a9ff' fullName='Oliver Moises Castro Montante'/>
      <BottomPart/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  },
});
