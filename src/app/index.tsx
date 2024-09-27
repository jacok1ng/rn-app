import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link } from "expo-router"
import { Component } from "@components"

const Index = () => {
  return (
    <SafeAreaView>
      <Text className="">Index</Text>
      <Link href={{ pathname: "/(tabs)/home" }}>Home</Link>
      <Component />
    </SafeAreaView>
  )
}

export default Index
