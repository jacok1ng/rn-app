import { ScrollView } from "react-native"
import { StatusBar } from "expo-status-bar"
import {
  DestinationPicker,
  DiscoverNewTours,
  Info,
  LastTrip,
} from "@components"
import { Redirect } from "expo-router"

const Index = () => {
  return <Redirect href="/(tabs)/home" />
}

export default Index
