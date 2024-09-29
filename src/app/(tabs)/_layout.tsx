import { Header } from "@components/shared"
import { Tabs } from "expo-router"
import { Image } from "react-native"

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Strona Główna",
          header: () => <Header title="Strona Główna" />,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@assets/images/leaf.png")}
              className="h-[20px] w-[20px]"
              tintColor={focused ? "#D13984" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="newTour"
        options={{
          tabBarLabel: "Nowa Trasa",
          header: () => <Header title="Nowa trasa" />,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@assets/images/leaf.png")}
              className="h-[20px] w-[20px]"
              tintColor={focused ? "#D13984" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default Layout
