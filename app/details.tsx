import { Stack, useNavigation } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
    const navigation = useNavigation();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Stack.Screen
                options={{
                    title: "Details page",
                    headerStyle: { backgroundColor: "black" },
                    headerTintColor: "white",
                    headerLeft: () => (
                        <Button
                            onPress={() => {
                                navigation.goBack();
                            }}
                            title="< Back"
                        />
                    ),
                }}
            />

            <Text>This is details page</Text>
        </View>
    );
}
