import 'react-native-gesture-handler';

import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import { Loading } from './src/components/Loading'
import { Home } from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold });

  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Home />
    </GestureHandlerRootView>
  );
}

