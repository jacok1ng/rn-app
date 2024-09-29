import { View, Text, ImageSourcePropType } from "react-native"
import { CircleIcon } from "@components/shared"

interface PickerItemProps {
  title: string
  source: ImageSourcePropType
  showDivider?: boolean
}

const PickerItem = ({ source, title, showDivider }: PickerItemProps) => (
  <>
    <View className="flex-row items-center">
      <CircleIcon source={source} />
      <Text className="ml-2.5 font-psemibold text-sm">{title}</Text>
    </View>
    {showDivider && <View className="mt-3 h-px bg-divider" />}
  </>
)

export default PickerItem
