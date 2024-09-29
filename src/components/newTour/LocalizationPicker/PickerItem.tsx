import { View, Text, ImageSourcePropType } from "react-native"
import { CircleIcon } from "@components"

interface PickerItemProps {
  title: string
  source: ImageSourcePropType
  showDivider?: boolean
}

const PickerItem = ({ source, title, showDivider }: PickerItemProps) => (
  <>
    <View className="flex-row items-center">
      <CircleIcon source={source} />
      <Text className="font-psemibold ml-2.5 text-sm">{title}</Text>
    </View>
    {showDivider && <View className="bg-divider mt-3 h-px" />}
  </>
)

export default PickerItem
