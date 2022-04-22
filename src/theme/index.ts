import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const {height, width} = Dimensions.get('screen');

export default {
    colors: {
      primary: "#8775FE",
      secondary: "#504DB6",
      text: "#85868A",
      text_dark:'#000',
      background: "#E5E5E5",
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
            paragraph:  RFValue(16),
            paragraphSmall:  RFValue(10),
            paragraphXSmall: RFValue(8),
        },
        borderRadius: RFValue(12),
        myWidth: width.toFixed(0),
        myHeight: height.toFixed(0),
    }
  };
  