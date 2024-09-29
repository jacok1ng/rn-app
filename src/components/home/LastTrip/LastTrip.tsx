import { View, Text, Image } from "react-native"
import React from "react"

const LastTrip = () => {
  return (
    <View className="mr-6 mt-5">
      <Text className="text-md font-pmedium">Twoja ostatnia wyprawa</Text>
      <View className="mt-3">
        <Image
          source={require("@assets/images/last_trip_screen.png")}
          className="w-full"
          resizeMode="stretch"
        />
      </View>
    </View>
  )
}

export default LastTrip
