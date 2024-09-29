import { View, Text, Image } from "react-native"

const Logo = () => <Image source={require("@assets/images/logo.png")} />
const Menu = () => <Image source={require("@assets/images/menu.png")} />

interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <View className="h-[110px] flex-row items-center bg-white px-6 pb-3 pt-[60px]">
      <View className="w-1/4 flex-row justify-start">
        <Logo />
      </View>
      <View className="w-2/4 items-center">
        <Text className="font-psemibold text-lg">{title}</Text>
      </View>
      <View className="w-1/4 flex-row justify-end">
        <Menu />
      </View>
    </View>
  )
}

export default Header
