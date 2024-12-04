import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

export default function TabLayout() {
  let [fontsLoaded] = useFonts({
    "Inter-Bold": Inter_700Bold,
    "Inter-Regular": Inter_400Regular,
  });
  if(fontsLoaded){
    return <ActivityIndicator />
  }
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
