import { View, Text, ImageSourcePropType, Image } from "react-native"

interface TourDataRowProps {
  title: string
  source: ImageSourcePropType
  value: string
  imageStyle?: string
  className?: string
}

const TourDataRow = ({
  source,
  title,
  value,
  imageStyle,
  className,
}: TourDataRowProps) => {
  return (
    <View className={`flex-row items-center ${className}`}>
      <View className="w-3/4 flex-row items-center">
        <Image source={source} className={imageStyle} />
        <Text className="ml-2.5 font-pmedium">{title}</Text>
      </View>
      <View className="w-1/4 flex-row justify-end">
        <Text className="font-psemibold">{value}</Text>
      </View>
    </View>
  )
}

export default TourDataRow
