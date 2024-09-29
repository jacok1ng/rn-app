import { View, Text, Image } from "react-native"

const Info = () => {
  return (
    <View className="mr-6 mt-5">
      <Text className="font-pmedium mb-3 text-sm">Tylko w Małopolsce</Text>
      <View className="h-[141px] flex-row overflow-hidden rounded-md bg-white">
        <View className="h-full w-7/12 p-4">
          <View className="h-3/4">
            <Text className="font-pmedium text-lg">
              Miejsca, który musisz zobaczyć.
            </Text>
          </View>
          <View className="h-1/4 justify-end">
            <View className="flex-row items-center">
              <Text className="font-psemibold mr-2 text-sm">Więcej</Text>
              <Image source={require("@assets/images/right_arrow.png")} />
            </View>
          </View>
        </View>
        <Image
          source={require("@assets/images/cracow.png")}
          className="w-5/12"
          resizeMode="cover"
        />
      </View>
    </View>
  )
}

export default Info
