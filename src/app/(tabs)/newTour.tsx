import { ScrollView } from "react-native"
import { CollapseMock, LocalizationPicker, SuggestedTours } from "@components"

const newTour = () => {
  return (
    <ScrollView className="mx-6 pt-9" showsVerticalScrollIndicator={false}>
      <LocalizationPicker />
      <CollapseMock title="Ostatnie lokalizacje" />
      <CollapseMock title="Proponowane trasy" rotateArrow />
      <SuggestedTours />
    </ScrollView>
  )
}

export default newTour
