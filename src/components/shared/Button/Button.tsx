import { View, Text, Pressable, PressableProps } from "react-native"

interface ButtonProps extends PressableProps {
  title: string
  secondary?: boolean
}

// viewStyle="bg-white border-2 border-dashed border-m-pink"

const Button = ({ title, secondary, ...props }: ButtonProps) => {
  let styles = ""

  if (secondary) styles = "border-2 border-m-pink bg-white"
  else styles = "bg-m-pink"

  return (
    <Pressable {...props}>
      <View className={`rounded-lg py-3 text-center ${styles}`}>
        <Text
          className={`text-center font-psemibold ${secondary ? "text-m-pink" : "text-white"}`}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  )
}

export default Button
