import { useFonts } from 'expo-font'





const FontPage = () => {


    const [fontsLoaded] = useFonts({
        "Nunitoblack": require("../fonts/Nunito-Black.ttf"),
        "Nunitobold": require("../fonts/Nunito-ExtraBoldItalic.ttf"),
        "Nunitomedium": require("../fonts/Nunito-MediumItalic.ttf"),
        "Nunito": require("../fonts/Nunito-MediumItalic.ttf")
    })
    if (!fontsLoaded) return null
}


export default FontPage;   