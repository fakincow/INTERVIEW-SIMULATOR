import React, { useState, useEffect, useCallback, ScrollView, Dimensions } from "react";
import Animated, { useSharedValue, useAnimatedStyle, TouchableWithoutFeedback } from 'react-native-reanimated';
import TopMenuBar from "../TopMenuBar";
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import ftwColors from '../data/ColorsFTW';
import BigScroll from '../BigScroll';
import bgImages from '../data/imagesUris';


export default function Learn({ navigation }) {
  const [currentSkin, setCurrentSkin] = useState("default");
  const [currentLocalSkin, setCurrentLocalSkin] = useState(0);
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/results?search_query=%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D1%8C%D1%8E+%D0%BD%D0%B0+%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%BA+%D1%84%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4');
  const [valueLang, setValueLang] = useState(0);
  const [valueAi, setValueAi] = useState(0);
  const [valueGender, setValueGender] = useState(0);
  const [valueChaos, setValueChaos] = useState(0);
  const [valueHorror, setValueHorror] = useState(0);

  const ftwBorders = ftwColors.backgrounds;
  //(currentSkin === 'BBB') ? bgBBBskin.theme : bgImages.homePage;
  const replaceSkin = (skinName) => {
    setCurrentSkin(skinName)
  }
  return (
    <>
      <WebView
        style={styles.container}
        source={{ uri: videoUrl }}
      />
      <View style={styles.message}>
        <TouchableOpacity onPress={() => setVideoUrl("https://www.youtube.com/results?search_query=Angular+job+interview")} >
          <Text ><MaterialCommunityIcons name="angular" size={24} color="black" />ANGULAR  INTERVIEW QUESTIONS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.message}>
        <TouchableOpacity onPress={() => setVideoUrl("https://www.youtube.com/results?search_query=React+job+interview")} >
          <Text ><MaterialCommunityIcons name="react" size={24} color="black" />REACT  INTERVIEW QUESTIONS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.message}>
        <TouchableOpacity onPress={() => setVideoUrl("https://www.youtube.com/results?search_query=Java+script+job+interview")} >
          <Text ><MaterialCommunityIcons name="web" size={24} color="black" />JAVASCRIPT INTERVIEW QUESTIONS</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  message: {
    resizeMode: "stretch",
    backgroundColor: "rgba(244, 249, 251, 0.80)",
    borderRadius: 12,
    fontSize: 22,
    fontWeight: "bold",
    margin: 5,
    padding: 5,
    opacity: 0.9,
    borderColor: "#eea74e",
    borderWidth: 3
  }
});
