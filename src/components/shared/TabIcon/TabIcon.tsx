import { Image, ImageSourcePropType, Text, View } from "react-native"

interface TabIconProps {
  icon: ImageSourcePropType
  color: string
  name: string
  focused: boolean
}

const TabIcon = ({ color, focused, icon, name }: TabIconProps) => (
  <View className="mt-2 items-center justify-center">
    <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="h-6 w-6"
    />
    <Text
      className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
      style={{ color }}
    >
      {name}
    </Text>
  </View>
)

export default TabIcon
