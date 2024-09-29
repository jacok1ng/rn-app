import { Header } from "@components"
import { Tabs } from "expo-router"
import { Image, Text, View } from "react-native"

const Logo = () => <Image source={require("@assets/images/logo.png")} />
const Menu = () => <Image source={require("@assets/images/menu.png")} />

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          header: () => <Header title="Strona Główna" />,
        }}
      />
      <Tabs.Screen
        name="newTour"
        options={{
          header: () => <Header title="Nowa trasa" />,
        }}
      />
    </Tabs>
  )
}

export default Layout
