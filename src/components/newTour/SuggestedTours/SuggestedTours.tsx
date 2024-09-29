import {
  View,
  Text,
  FlatList,
  Image,
  ImageSourcePropType,
  ScrollView,
} from "react-native"
import React from "react"

const data = [
  {
    address: "ul. Grodzka 12",
    city: "Kraków",
    path: require("@assets/images/cracow.png"),
  },
  {
    address: "ul. Słowackiego 4",
    city: "Oświęcim",
    path: require("@assets/images/oswiecim.jpg"),
  },
  {
    address: "ul. Lwowska 7",
    city: "Nowy Sącz",
    path: require("@assets/images/nowy_sacz.jpg"),
  },
  {
    address: "ul. Kościelna 3",
    city: "Zakopane",
    path: require("@assets/images/zakopane.jpg"),
  },
  {
    address: "ul. Krakowska 5",
    city: "Chrzanów",
    path: require("@assets/images/chrzanow.jpg"),
  },
  {
    address: "ul. Dembowskiego 2",
    city: "Wieliczka",
    path: require("@assets/images/wieliczka.jpg"),
  },
]

interface ItemProps {
  address: string
  city: string
  path: ImageSourcePropType
  divider?: boolean
}

const Item = ({ address, city, path, divider }: ItemProps) => (
  <>
    <View className="mb-4 mt-4 flex-row">
      <View className="w-10/12 flex-row">
        <Image
          source={path}
          className="h-[48px] w-[56px] rounded-sm"
          resizeMode="cover"
        />
        <View className="ml-3">
          <Text className="font-psemibold">{address}</Text>
          <Text className="font-pregular">{city}</Text>
        </View>
      </View>
      <View className="w-2/12 flex-row items-center justify-end">
        <Image source={require("@assets/images/right_arrow.png")} />
      </View>
    </View>
    {divider && <View className="h-px bg-divider" />}
  </>
)

const SuggestedTours = () => {
  return (
    <View className="mb-10 mt-5 rounded-md bg-white px-4">
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => (
         
        )}
      /> */}
      {/* <ScrollView contentContainerStyle={{ marginBottom: 20 }}> */}
      {data.map((item, index) => (
        <Item {...item} key={item.city} divider={index !== data.length - 1} />
      ))}
      {/* </ScrollView> */}
    </View>
  )
}

export default SuggestedTours
