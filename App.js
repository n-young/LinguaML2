import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import CardListScreen from './screens/CardListScreen';
import CardScreen from './screens/CardScreen';
import SettingsScreen from './screens/SettingsScreen';
import EditCardScreen from './screens/EditCardScreen';
import ShowQRScreen from './screens/QRScreen';
import { Provider } from './store';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

enableScreens();

const Main = createNativeStackNavigator();
export default function App(props) {
  return (
    <ActionSheetProvider>
      <Provider>
        <View style={styles.container}>
          <NavigationNativeContainer>
            <Main.Navigator>
              <Main.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />

              <Main.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ headerLargeTitle: true, headerBackTitle: 'Camera' }}
              />

              <Main.Screen
                name="Cards"
                component={CardListScreen}
                options={{ headerLargeTitle: true, headerBackTitle: 'Camera' }}
              />
              <Main.Screen name="Card" component={CardScreen} />
              <Main.Screen name="ShowQR" component={ShowQRScreen} />
              <Main.Screen name="EditCard" component={EditCardScreen} />
            </Main.Navigator>
          </NavigationNativeContainer>
        </View>
      </Provider>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
