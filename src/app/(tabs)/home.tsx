import { ScrollView } from "react-native"
import { StatusBar } from "expo-status-bar"
import {
  DestinationPicker,
  DiscoverNewTours,
  Info,
  LastTrip,
} from "@components/home"

const Home = () => {
  return (
    <>
      <ScrollView className="ml-6 pt-9">
        <DestinationPicker />
        <LastTrip />
        <DiscoverNewTours />
        <Info />
      </ScrollView>
      <StatusBar style="dark" />
    </>
  )
}

export default Home
