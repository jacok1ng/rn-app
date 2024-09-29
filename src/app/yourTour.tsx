import { Image, ScrollView } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Actions, Summary } from "@components/yourTour"

const yourTour = () => {
  return (
    <>
      <ScrollView className="mx-6" showsVerticalScrollIndicator={false}>
        <Image
          source={require("@assets/images/your_tour_map.png")}
          className="mb-5 mt-9 w-full"
          resizeMode="stretch"
        />
        <Summary />
        <Actions />
      </ScrollView>
      <StatusBar style="dark" />
    </>
  )
}

export default yourTour
