import { View, Image, Text } from "react-native"

const TourCreator = () => {
  return (
    <View className="bg-m-pink flex-row items-center justify-center rounded px-3 py-3">
      <Image source={require("@assets/images/map.png")} />
      <Text className="font-psemibold ml-2.5 text-white">Kreator</Text>
    </View>
  )
}

export default TourCreator
