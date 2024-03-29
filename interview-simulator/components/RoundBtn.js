import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Animated } from 'react-native';
import ftwColors from './data/ColorsFTW';
import React, { useState, useEffect, useCallback } from "react";
import {PAGES} from "../components/data/consts/Enums";
const diffList = ['JUNIOR', 'MIDDLE', 'SINIOR']
export default function RoundBtn({ navigation, route, level, framework, difficulty, skin, images }) {
  const [selectedFrameWorkIndex, setSelectedFrameWorkIndex] = useState(0);
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const ftwBorders = ftwColors.backgrounds;
  const [iconImage, setIconImage] = useState()

  useEffect(() => {
    if (images) {
     setIconImage(images[Math.floor((Math.random() * images.length))])
    }
   
  }, [images]);


  const startAnimation = (frameWorkIndex) => {
    setSelectedFrameWorkIndex(frameWorkIndex);
    Animated.timing(animation, {
      toValue: 7,
      duration: 1000,
      useNativeDriver: true
    })
      .start(({ returnAnimation }) => {
        navigation.navigate(PAGES.Quiz, params = {
          lang: framework,
          avatars: `${images}`,
          difficulty: `${diffList[difficulty]}`, skin: `${skin}`,
        })
        setAnimation(new Animated.Value(0));
      });
  }
  const animatedStyles = {
    transform: [
      { scale: animation },
    ]
  }
  return (
    <>
      <TouchableOpacity
        onPress={() => startAnimation(2)}>
        <View style={[styles.container, { top: 70 }]} >
          <Animated.View style={[styles.cicrcle, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }, { backgroundColor: `${ftwColors.skinSlider[Math.floor(Math.random() * ftwColors.skinSlider.length)]}` }]} />
          <Animated.View style={[styles.cicrcle2, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }, { backgroundColor: `${ftwColors.skinSlider[Math.floor(Math.random() * ftwColors.skinSlider.length)]}` }]} />
          <Animated.View style={[styles.cicrcle3, animatedStyles, { borderColor: `${ftwBorders[Math.floor(Math.random() * ftwBorders.length)]}` }, { backgroundColor: `${ftwColors.skinSlider[Math.floor(Math.random() * ftwColors.skinSlider.length)]}` }]} />
        </View>
        <Image style={[styles.button, { borderColor: ftwColors.borders[level] }]} source={{
          uri: `${iconImage}`
        }} />
        <Text style={styles.paragraph}>
          {level} {selectedFrameWorkIndex}{framework}</Text>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  button: {
    resizeMode: "stretch",
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderColor: "white",
    borderWidth: 8,
    margin: 8,
    padding: 8,
    backgroundColor: 'rgba(253, 239, 206, 0.57)',
    zIndex: 9
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  cicrcle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderWidth: 6,
    borderColor: "rgba(0, 0, 0, 0.5)",
    opacity: 0.9,
    zIndex: 7,
    backgroundColor: 'rgba(255, 255, 255, 5)',
    position: 'absolute'
  },
  cicrcle2: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 6,
    borderColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9,
    opacity: 0.9,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute'
  },
  cicrcle3: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    borderWidth: 6,
    zIndex: 8,
    opacity: 0.9,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    position: 'absolute'
  },
});
