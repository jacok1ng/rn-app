import { Stack } from "expo-router"
import { useFonts } from "expo-font"
import { Image } from "react-native"
import { Header } from "@components/shared"

const Logo = () => <Image source={require("@assets/images/logo.png")} />
const Menu = () => <Image source={require("@assets/images/menu.png")} />

const RootLayout = () => {
  const {} = useFonts({
    "Poppins-Black": require("@assets/fonts/PoppinsBlack900.ttf"),
    "Poppins-Bold": require("@assets/fonts/PoppinsBold700.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/PoppinsExtraBold800.ttf"),
    "Poppins-Light": require("@assets/fonts/PoppinsLight300.ttf"),
    "Poppins-Medium": require("@assets/fonts/PoppinsMedium500.ttf"),
    "Poppins-Regular": require("@assets/fonts/PoppinsRegular400.ttf"),
    "Poppins-SemiBold": require("@assets/fonts/PoppinsSemiBold600.ttf"),
    "Poppins-Thin": require("@assets/fonts/PoppinsThin250.ttf"),
  })

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="yourTour"
        options={{
          header: () => <Header title="Twoja trasa" />,
        }}
      />
    </Stack>
  )
}

export default RootLayout
