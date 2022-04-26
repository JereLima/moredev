import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const {height, width} = Dimensions.get('screen');

export default {
    colors: {
      primary: "#8775FE",
      secondary: "#504DB6",
      text: "#f4f4f4",
      text_dark:'#ffff',
      disabled: '#EBEBED',
      disabled_text: '#B4B4B6',
      background: "#020202",
      white: '#FFFF',
      gray: '#DBDBDB',
      gray_medium: '#FFFF',
      gray_dark: '#FFFF',
      background_card: '#ECE9FF',
    },
    fonts: {
      medium: "WorkSans_500Medium",
      semiBold: 'WorkSans_600SemiBold',
      bold: "WorkSans_700Bold",
    },
    sizes: {
        fonts:{
            button: RFValue(14),
            h1: RFValue(24),
            h2: RFValue(20),
            h3: RFValue(18),
            paragraphLarger:  RFValue(16),
            paragraph: RFValue(14),
            paragraphSmall:  RFValue(10),
            paragraphXSmall: RFValue(8),
        },
        borderRadius: RFValue(12),
        screenPadding: RFValue(16),
        myWidth: Number(width.toFixed(0)),
        myHeight: height.toFixed(0),
    }
  };
  