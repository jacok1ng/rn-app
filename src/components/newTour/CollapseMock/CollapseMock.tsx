import { View, Text, Image } from "react-native"

interface CollapseMockProps {
  title: string
  rotateArrow?: boolean
}

const CollapseMock = ({ title, rotateArrow }: CollapseMockProps) => {
  return (
    <View className="mt-5 flex-row items-center">
      <View className="w-3/4">
        <Text className="font-pmedium text-base">{title}</Text>
      </View>
      <View className="w-1/4 flex-row items-center justify-end">
        <Image
          source={require("@assets/images/arrow.png")}
          className={`rotate-${rotateArrow ? "180" : "0"}`}
        />
      </View>
    </View>
  )
}

export default CollapseMock
