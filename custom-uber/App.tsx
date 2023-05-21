import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
      <RootNavigator />
  );
}

registerRootComponent(App);

console.log("Sexo con el Ramón");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
