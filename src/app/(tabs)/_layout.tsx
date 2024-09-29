import { Header, TabIcon } from "@components/shared"
import { Tabs } from "expo-router"
import { Image } from "react-native"

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#D13984",
        tabBarInactiveTintColor: "#CDCDE0",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Strona Główna",
          header: () => <Header title="Strona Główna" />,
          tabBarIcon: (props) => (
            <TabIcon
              icon={require("@assets/images/home.png")}
              name="Strona Główna"
              {...props}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="newTour"
        options={{
          tabBarLabel: "Nowa Trasa",
          header: () => <Header title="Nowa trasa" />,
          tabBarIcon: (props) => (
            <TabIcon
              icon={require("@assets/images/zoom.png")}
              name="Nowa trasa"
              {...props}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default Layout
