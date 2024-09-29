import { Button } from "@components/shared"
import { View, Text } from "react-native"

const Actions = () => {
  return (
    <View className="mb-9">
      <Button title="Otwórz w Google Maps" />
      <Button secondary title="Edytuj trasę" className="mt-4" />
    </View>
  )
}

export default Actions
