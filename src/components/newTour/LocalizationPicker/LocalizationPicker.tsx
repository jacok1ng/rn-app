import { Text, View } from "react-native"
import React from "react"
import { Button, CircleIcon, ImageButton } from "@components/shared"
import PickerItem from "./PickerItem"
import Arrows from "./Arrows"
import { router } from "expo-router"

const LocalizationPicker = () => {
  return (
    <View className="relative">
      <Arrows />
      <View className="rounded-md bg-white px-4 py-3">
        <PickerItem
          showDivider
          source={require("@assets/images/gps_sign.png")}
          title="Lokalizacja startowa"
        />
        <View className="mt-3">
          <PickerItem
            showDivider
            source={require("@assets/images/checked_point.png")}
            title="Dokąd jedziesz?"
          />
        </View>
        <View className="mt-3 flex-row items-center">
          <View className="w-3/4 flex-row items-center">
            <CircleIcon
              source={require("@assets/images/plus.png")}
              viewStyle="bg-white border-2 border-dashed border-m-pink"
            />
            <Text className="ml-2.5 font-psemibold text-sm">
              Dodaj przystanek
            </Text>
          </View>
          <View className="w-1/4 items-end">
            <ImageButton source={require("@assets/images/settings.png")} />
          </View>
        </View>
      </View>
      <View className="mt-5">
        <Button title="Znajdź trasy" onPress={() => router.push("/yourTour")} />
      </View>
    </View>
  )
}

export default LocalizationPicker
