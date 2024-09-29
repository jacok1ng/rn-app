import { View, Text, Image } from "react-native"
import InfoBox from "./InfoBox"
import TourDataRow from "./TourDataRow"

const Summary = () => {
  return (
    <View className="mb-5 rounded-md bg-white p-4">
      <Text className="font-psemibold text-xl">VELO Dunajec</Text>
      <View className="mt-2 flex-row items-center">
        <Image
          source={require("@assets/images/blue_gps_sign.png")}
          resizeMode="stretch"
        />
        <Text className="ml-2 font-pregular">Nowy Sącz - Nowy Targ</Text>
      </View>
      <View className="mt-4 flex-row">
        <InfoBox
          source={require("@assets/images/distance.png")}
          title="74 km"
          viewStyle="w-4/12 rounded-l-md"
        />
        <InfoBox
          source={require("@assets/images/clock.png")}
          title="5 h 17 min"
          viewStyle="w-4/12 mx-1"
        />
        <InfoBox
          source={require("@assets/images/gradient.png")}
          title="602 m"
          viewStyle="w-4/12 rounded-r-md"
        />
      </View>
      <View className="my-4 h-px bg-divider" />
      <Image source={require("@assets/images/graph.png")} className="w-full" />
      <View className="mt-4">
        <TourDataRow
          source={require("@assets/images/gradient_direction.png")}
          title="Suma podejść"
          value="812 m"
        />
        <TourDataRow
          source={require("@assets/images/gradient_direction.png")}
          title="Suma zejść"
          value="1141 m"
          className="mt-3"
          imageStyle="rotate-90"
        />
        <View className="my-5 h-px bg-divider" />
        <TourDataRow
          source={require("@assets/images/dolar_sign.png")}
          title="Oszczędzisz na paliwie:"
          value="31.33 zł"
        />
        <TourDataRow
          source={require("@assets/images/heart.png")}
          title="Spalisz:"
          value="2137 kcal"
          className="mt-3"
        />
        <TourDataRow
          source={require("@assets/images/leaf.png")}
          title="Unikniesz emisji CO2:"
          value="0.94kg"
          className="mt-3"
        />
      </View>
    </View>
  )
}

export default Summary
