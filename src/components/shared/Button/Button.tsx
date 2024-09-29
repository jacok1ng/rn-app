import { View, Text, Pressable, PressableProps } from "react-native"

interface ButtnoProps extends PressableProps {
  title: string
}

const Button = ({ title }: ButtnoProps) => {
  return (
    <Pressable>
      <View className="bg-m-pink rounded-lg py-3 text-center">
        <Text className="font-psemibold text-center text-white">{title}</Text>
      </View>
    </Pressable>
  )
}

export default Button
