import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link } from "expo-router"

const Index = () => {
  return (
    <SafeAreaView>
      <Text className="">Index</Text>
      <Link href={{ pathname: "/(tabs)/home" }}>Home</Link>
    </SafeAreaView>
  )
}

export default Index
