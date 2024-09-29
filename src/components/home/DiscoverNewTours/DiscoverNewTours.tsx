import { View, Text, ScrollView } from "react-native"
import React from "react"
import { ImageTile } from "@components/shared"

const DiscoverNewTours = () => {
  return (
    <View className="mt-5">
      <Text className="font-pmedium mb-3 text-sm">Odkrywaj nowe trasy</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ gap: 20 }}
        showsHorizontalScrollIndicator={false}
      >
        <ImageTile
          title="Turystyczne"
          source={require("@assets/images/bike.png")}
        />
        <ImageTile
          title="Miejskie"
          source={require("@assets/images/bike.png")}
        />
        <ImageTile
          title="Terenowe"
          source={require("@assets/images/bike.png")}
        />
        <ImageTile
          title="Widokowe"
          source={require("@assets/images/bike.png")}
        />
      </ScrollView>
    </View>
  )
}

export default DiscoverNewTours
