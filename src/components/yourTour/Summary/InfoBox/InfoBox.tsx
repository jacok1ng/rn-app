import { View, Text, ImageSourcePropType, Image } from "react-native"

interface InfoBoxProps {
  title: string
  source: ImageSourcePropType
  viewStyle?: string
}

const InfoBox = ({ source, title, viewStyle }: InfoBoxProps) => {
  return (
    <View className={`bg-light-blue p-3 ${viewStyle}`}>
      <View className="flex-row">
        <Image source={source} />
        <Text className="ml-1.5 font-pmedium text-xs">{title}</Text>
      </View>
    </View>
  )
}

export default InfoBox
