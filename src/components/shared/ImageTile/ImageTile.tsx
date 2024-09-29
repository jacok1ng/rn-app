import { View, Text, ImageSourcePropType, Image } from "react-native"
import React from "react"

interface ImageTileProps {
  source: ImageSourcePropType
  title: string
}

const ImageTile = ({ source, title }: ImageTileProps) => (
  <View className="h-[94px] min-w-[97px] max-w-[97px] items-center justify-center rounded-md bg-white p-3">
    <Image source={source} resizeMode="contain" className="w-[45px]" />
    <Text className="font-pmedium mt-3 text-center text-xs">{title}</Text>
  </View>
)

export default ImageTile
