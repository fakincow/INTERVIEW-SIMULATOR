import {
  React,
  useState,
  useLayoutEffect,
} from 'react';

import { Asset } from 'expo-asset';
import {  View, StyleSheet, Image } from 'react-native';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomePage from './components/pages/HomePage';
import WelcomePage from './components/pages/WelcomePage';
import Quiz from './components/pages/Quiz';
import About from './components/pages/About';
import QuickPlay from './components/pages/QuickPlay';
import HelpPage from './components/pages/Help';
import TopMenuBar from './components/TopMenuBar';
import GameOver from './components/pages/GameOver';
import SettingPage from './components/pages/Settimng';
import StoryModePage from './components/pages/StoryModePage';
import Learn from './components/pages/Watch';
import { PAGES } from './components/data/consts/Enums';
const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(179, 42, 13, 0.64)',
    flex: 1,
  },
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: 'rgba(203, 17, 144, 0.64)',
  },
});
function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}
function App() {
  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`
  const [assetsLoaded, setAssetsLoaded] = useState('false');
  useLayoutEffect(() => {
    _loadAssetsAsync();
  }, []);
  const _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require('./assets/startBtn.png'),
      require('./assets/icons/startBtnNormal.png'),
      require('./assets/submitBtn3.png'),
    ]);
    const imageAssets2 = cacheImages([
      require('./assets/icons/angularLogo.png'),
      require('./assets/icons/htmlLogo.png'),
      require('./assets/icons/reactLogo.png'),
    ]);
    Promise.all([imageAssets, imageAssets2]).then((values) => {
      console.log('fetched...');
      setAssetsLoaded('true');
    });
  };
  return (
    <View style={styles.container}>
      <NavigationContainer
        style={{ position: 'absolute', zIndex: 1 }}
        ref={navigationRef}>
        <StatusBar style={styles.splash} />
        <TopMenuBar navigation={navigationRef} />
        <Stack.Navigator>
          <Stack.Screen name={PAGES.WelcomePage} component={WelcomePage} />
          <Stack.Screen name={PAGES.SettingPage} component={SettingPage} />
          <Stack.Screen name={PAGES.About} component={About} />
          <Stack.Screen name={PAGES.HelpPage} component={HelpPage} />
          <Stack.Screen name={PAGES.StoryModePage} component={StoryModePage} />
          <Stack.Screen name={PAGES.Learn} component={Learn} />
          <Stack.Screen name={PAGES.HomePage} component={HomePage} />
          <Stack.Screen name={PAGES.Quiz} component={Quiz} />
          <Stack.Screen name={PAGES.QuickPlay} component={QuickPlay} />
          <Stack.Screen name={PAGES.GameOver} component={GameOver} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
