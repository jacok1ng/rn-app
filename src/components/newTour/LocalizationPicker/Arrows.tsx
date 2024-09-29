import { View, Text, Image } from "react-native"
import React from "react"

const Arrows = () => {
  return (
    <View className="absolute right-4 top-11 z-10 h-[20px] w-[35px] flex-row justify-end bg-white pr-1">
      <Image source={require("@assets/images/arrows.png")} />
    </View>
  )
}

export default Arrows
