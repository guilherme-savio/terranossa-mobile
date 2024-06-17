import { Image, Text, View } from "react-native";

export default function PageTitle({ title, desc, img, color = 'white' }) {
  return (
    <View className="flex flex-row bg-primary pt-4 pb-4">
      <View className="w-[120px]">
        <Image source={img} />
      </View>
      <View className="flex-1 pt-2" style={{color: color}}>
        <Text className="font-bold text-base-100 text-inherit">{title}</Text>
        <Text className="pt-1 text-base-100 text-inherit">{desc}</Text>
      </View>
    </View>
  );
}