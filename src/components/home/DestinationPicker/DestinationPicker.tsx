import { View, Text, Image } from "react-native"
import React from "react"
import { ImageButton } from "@components/shared"

const DestinationPicker = () => {
  return (
    <View className="mr-6 flex-row items-center rounded-md bg-white px-4 py-3">
      <View className="w-1/2 flex-row items-center gap-2.5">
        <View className="h-[32px] w-[32px] items-center justify-center rounded-full bg-m-pink">
          <Image source={require("@assets/images/zoom.png")} />
        </View>
        <Text className="font-psemibold text-sm">Dokąd jedziesz?</Text>
      </View>
      <View className="w-1/2 flex-row items-end justify-end">
        <ImageButton source={require("@assets/images/map.png")} />
        <ImageButton
          source={require("@assets/images/microphone.png")}
          viewStyle="ml-4"
        />
      </View>
    </View>
  )
}

export default DestinationPicker
