import { Image, ImageSourcePropType, Text, View } from "react-native"

const data = [
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
        <Image source={require("@assets/images/plus.png")} />
      </View>
    </View>
    {divider && <View className="h-px bg-divider" />}
  </>
)

const PlacesOnWay = () => {
  return (
    <View className="mb-10 rounded-md bg-white px-4 pt-4">
      <Text className="font-psemibold text-base">Obiekty na trasie</Text>
      <Text className="mb-3 font-pregular text-xs">
        Oto co warto zobaczyć po drodze
      </Text>
      {data.map((item, index) => (
        <Item {...item} key={item.city} divider={index !== data.length - 1} />
      ))}
    </View>
  )
}

export default PlacesOnWay
