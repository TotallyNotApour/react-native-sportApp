import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>OMG this is my app sheeesh</Text>
      <Link href="/signIn">Test Link</Link>
    </View> 
    
  );
}
