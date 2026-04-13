import { Link } from "expo-router";
import { Button, View } from "react-native";

const signIn = () => {
    return (
        <View 
            style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            }}
        > 
            <Link href="/">Bonjour, je suis le test</Link>

            <Button 
                onPress={() => { 
                    console.log("tapped");
                }}
            title="Sign In"></Button>
        </View>
    )
}

export default signIn;