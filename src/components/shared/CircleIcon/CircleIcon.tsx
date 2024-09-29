import { View, Image, ImageSourcePropType } from "react-native"

interface CircleIconProps {
  source: ImageSourcePropType
  viewStyle?: string
}

const CircleIcon = ({ source, viewStyle }: CircleIconProps) => (
  <View
    className={`bg-m-pink h-[32px] w-[32px] items-center justify-center rounded-full ${viewStyle}`}
  >
    <Image source={source} />
  </View>
)

export default CircleIcon
