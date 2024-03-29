import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Animated, TouchableWithoutFeedback
} from "react-native";
import {PAGES} from "../../components/data/consts/Enums";
import { MaterialIcons } from '@expo/vector-icons';
import MonkeysImages from '../data/Monkeys';
import ColorsFTW from '../data/ColorsFTW';
import ftwBgImages from '../data/FTWthemes';
import ftwColors from '../data/ColorsFTW';
export default function GameOver({ navigation, route }) {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [currentLocalSkin, setCurrentLocalSkin] = useState(0);
  const ftwColorArray = ColorsFTW.progressBars;
  const ftwBorders = ftwColors.backgrounds;
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 7,
      duration: 700,
      useNativeDriver: true
    })
      .start(({ returnAnimation }) => {
        navigation.navigate(PAGES.HomePage, params = { lang: 'lang', difficulty: 'MIDDLE', skin: 'currentSkin' })
        setAnimation(new Animated.Value(0));
      });
  }
  const animatedStyles = {
    transform: [
      { scale: animation }
    ]
  }
  return (
    <>
      <ImageBackground
        style={styles.bgimage}
        backgroundColor={ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}
        source={{
          uri: ftwBgImages.quiz[Math.floor(Math.random() * ftwBgImages.quiz.length)]
        }}>

        <TouchableOpacity onPress={() => setCurrentLocalSkin((i) => i + 1)}>
          <View style={[styles.messageDiv, { borderColor: ftwColorArray[`${[Math.floor(Math.random() * ftwColorArray.length)]}`] }]}>
            <Text style={styles.paragraph}>
              <MaterialIcons name="phone-locked" size={30} color="black" /> IT WAS PLEASURE ...
            </Text>
          </View>
          <Image
            style={styles.endImage}
            source={{
              uri: MonkeysImages.default[[Math.floor(Math.random() * MonkeysImages.default.length)]],
            }}
          />
          <View style={[styles.messageDiv, { borderColor: ftwColorArray[route.params.calculatedScore] }]}>
            <Text style={styles.paragraph}>WE WILL CALL YOU...</Text>
            <Text style={styles.paragraph}>{route.params.calculatedScore} / 10</Text>
          </View>
          <View style={styles.shareRatePanel}>
            <View style={[styles.messageDiv, { borderColor: ftwColorArray[`${[Math.floor(Math.random() * ftwColorArray.length)]}`] }]}>
              <View style={styles.shareRatePanel}>
                <Image
                  style={styles.iconView}
                  source={require("../../assets/icons/clock.png")}
                />
                <Text style={styles.paragraph}>TIME : 02:01:0789 sec</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={startAnimation}>
          <View style={[styles.container, { marginTop: -155 }]} >
            <Animated.View style={[styles.box, animatedStyles, { marginTop: -15, position: 'absolute' }, { borderColor: ftwColorArray[`${[Math.floor(Math.random() * ftwColorArray.length)]}`] }]} />
            <Image
              style={[styles.startBtn, {
                marginTop: 13, position: 'absolute',
                height: 150, width: 150,
                borderWidth: 6,
                borderColor: 'white',
                borderRadius: 150 / 2
              },
              { borderColor: ftwColorArray[`${[Math.floor(Math.random() * ftwColorArray.length)]}`] }]}
              source={require("../../assets/icons/retryEmpty.png")}
            />
            <Animated.View style={[styles.cicrcle, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }, { backgroundColor: `${ftwColors.skinSlider[Math.floor(Math.random() * ftwColors.skinSlider.length)]}` }]} />
            <Animated.View style={[styles.cicrcle2, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }, { backgroundColor: `${ftwColors.skinSlider[Math.floor(Math.random() * ftwColors.skinSlider.length)]}` }]} />
            <Animated.View style={[styles.cicrcle3, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }, { backgroundColor: `${ftwColors.skinSlider[Math.floor(Math.random() * ftwColors.skinSlider.length)]}` }]} />

          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "rgba(94, 214, 105, 0.42)",
    textAlign: 'center',
    opacity: 0.8,
    margin: 0,
    resizeMode: 'stretch',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  shareRatePanel: {
    flexDirection: "row"
  },
  paragraph: {
    margin: 5,
    fontSize: 14,
    color: "#001a00",
    fontWeight: "bold",
    textAlign: "center"
  },
  messageDiv: {
    backgroundColor: "white",
    borderRadius: 12,
    margin: 10,
    opacity: 0.8,
    width: 290,
    padding: 5,
    borderColor: "#000000",
    borderWidth: 3
  },
  endImage: {
    width: 250,
    height: 250,
    resizeMode: "stretch",
    borderRadius: 12,
    margin: 10,
    borderColor: "#201b1a",
    borderWidth: 6
  },
  iconView: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    flexDirection: "row",
    resizeMode: "stretch",
    textAlign: "center",
    opacity: 0.9,
    borderColor: "red",
    borderWidth: 2,
    padding: 5,
  },
  box: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderWidth: 6,
    borderColor: "white"
  },
  cicrcle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderWidth: 10,
    padding: 5,
    margin: 5,
    zIndex: 1,
    opacity: 0.6,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute'
  },
  cicrcle2: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 10,
    zIndex: 2,
    opacity: 0.5,
    backgroundColor: 'rgba(1, 0, 4, 0.7)',
    position: 'absolute'
  },
  cicrcle3: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 10,
    zIndex: 3,
    opacity: 0.4,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute'
  }
});
