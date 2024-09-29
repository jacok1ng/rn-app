import {
  View,
  Image,
  ImageSourcePropType,
  Pressable,
  PressableProps,
} from "react-native"

interface ImageButtonProps extends PressableProps {
  source: ImageSourcePropType
  viewStyle?: string
}

const ImageButton = ({ source, viewStyle, ...props }: ImageButtonProps) => (
  <Pressable {...props}>
    <View
      className={`bg-m-pink h-[32px] w-[36px] items-center justify-center rounded ${viewStyle}`}
    >
      <Image source={source} />
    </View>
  </Pressable>
)

export default ImageButton
